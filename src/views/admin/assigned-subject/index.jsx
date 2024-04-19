import React from "react";
import CheckTable from "./components/CheckTable";
import tableDataCheck from "./variables/tableDataCheck";
import { useState } from "react";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "variables/columnsData";
const AssignedSubject = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <>
      <div className="mt-3">
        <div className="mt-3 grid grid-flow-col justify-start  gap-2 sm:auto-cols-max sm:justify-end">
          <button
            type="button"
            onClick={openForm}
            className="flex items-center justify-center rounded border bg-[#10375e] py-2 px-4 font-semibold text-white hover:bg-[#185490]  hover:text-white focus:outline-none focus:ring-0"
          >
            Add +
          </button>
                
        </div>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </div>
    </>
  );
};

export default AssignedSubject;
