import React from "react";
import { useState, useEffect } from "react";
import CustomTable from "components/table";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { getAdminsAsync } from "services/Admins/AdminServices";
import EditAddAdminModal from "./components/EditAddAdminModal";
import ViewAdminModal from "./components/ViewAdminModal";
import DeleteAdminModal from "./components/DeleteAdminModal";

const AadminAdmins = () => {
  const [isEditAddFormOpen, setIsEditAddFormOpen] = useState(false);
  const [isViewFormOpen, setIsViewFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  const [editAddFormTitle, setEditAddFormTitle] = useState("");
  const [editViewData, setEditViewData] = useState({});
  const [idForDeleteUser, setIdForDeleteUser] = useState(null);

  const closeEditAddForm = () => {
    setIsEditAddFormOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const closeViewForm = () => {
    setIsViewFormOpen(false);
  };

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const admins = await getAdminsAsync();
      setData(admins.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (data) => {
    setEditAddFormTitle("Edit Admin")
    setEditViewData(data)
    setIsEditAddFormOpen(true);
  }
  const handleAdd = () => {
    setEditViewData({});
    setEditAddFormTitle("Add Admin");
    setIsEditAddFormOpen(true);
  }
  const handleDelete = (id) => {
    setIdForDeleteUser(id);
    setIsDeleteModalOpen(true);
  }
  const handleView = (data) => {
    setEditViewData(data)
    setIsViewFormOpen(true)
    console.log(data);
  }

  const headers = [
    { field: "id", headerName: "Sr No", width: 80 },
    { field: "Email", headerName: "Email", width: 300 },
    { field: "Gender", headerName: "Gender", width: 100 },
    { field: "Contact", headerName: "Contact", width: 300 },
    { field: "Address", headerName: "Address", width: 256 },
    {
      headerName: "Action",
      headerAlign: "center",
      width: 300,
      renderCell: (params) => (
        <>
          <Link
            onClick={() => handleEdit(params.row)}
            style={{
              backgroundColor: "blue",
              borderRadius: "50%",
              margin: "7px",
            }}
            >
            <MdEdit style={{ color: "white", margin: "7px" }} />
          </Link>
          <Link
            onClick={() => handleDelete(params.row.id)}
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              margin: "7px",
            }}
            >
            <MdDelete style={{ color: "white", margin: "7px" }} />
          </Link>
          <Link
            onClick={() => handleView(params.row)}
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
            onClick={() => handleAdd()}
            className="my-3 flex items-center justify-center rounded border bg-[#10375e] py-2 px-4 font-semibold text-white hover:bg-[#185490]  hover:text-white focus:outline-none focus:ring-0"
          >
            Add +
          </button>
        </div>
        <CustomTable data={data} headers={headers} pagesize={5} /> 
      </div>
      <EditAddAdminModal title={editAddFormTitle} isOpen={isEditAddFormOpen} onClose={closeEditAddForm} data={editViewData} />
      <ViewAdminModal isOpen={isViewFormOpen} onClose={closeViewForm} data={editViewData} />
      <DeleteAdminModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} id={idForDeleteUser}/>
    </>
  );
};

export default AadminAdmins;
