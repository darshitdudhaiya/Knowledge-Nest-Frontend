import React from 'react'
import CheckTable from "./components/CheckTable";
import tableDataCheck from "./variables/tableDataCheck";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "variables/columnsData";
const Users = () => {
  return (
    <>
      <div className="mt-3">
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </div>
    </>
  )
}

export default Users