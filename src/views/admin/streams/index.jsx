import React from "react";
import CheckTable from "./components/CheckTable";
import { useState, useEffect } from "react";
import CustomTable from "components/table";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { getStreamsAsync } from "services/Streams/streamServices";
import AddStream from "./components/StreamModel";

const Streams = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const admins = await getStreamsAsync();
      console.log(admins.data);
      setData(admins.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  const headers = [
    { field: "id", headerName: "Sr No", width: 80 },
    { field: "Name", headerName: "Email", width: 955 },
    {
      headerName: "Action",
      headerAlign: "center",
      width: 300,
      renderCell: (params) => (
        <>
          {console.log(params)}
          <Link
            onClick={() => console.log(params.row.id)}
            style={{
              backgroundColor: "blue",
              borderRadius: "50%",
              margin: "7px",
            }}
          >
            <MdEdit style={{ color: "white", margin: "7px" }} />
          </Link>
          <Link
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              margin: "7px",
            }}
          >
            <MdDelete style={{ color: "white", margin: "7px" }} />
          </Link>
          <Link
            style={{
              backgroundColor: "green",
              borderRadius: "50%",
              margin: "7px",
            }}
          >
            <IoMdEye style={{ color: "white", margin: "7px" }} />
          </Link>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="mt-3">
        <div className="mt-3 grid grid-flow-col justify-start  gap-2 sm:auto-cols-max sm:justify-end">
          <button
            type="button"
            onClick={openForm}
            className="my-3 flex items-center justify-center rounded border bg-[#10375e] py-2 px-4 font-semibold text-white hover:bg-[#185490]  hover:text-white focus:outline-none focus:ring-0"
          >
            Add +
          </button>
        </div>
        <CustomTable data={data} headers={headers} pagesize={5} /> 
      </div>
      <AddStream title="Add Stream" isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default Streams;
