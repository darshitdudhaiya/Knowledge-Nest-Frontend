import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import PropTypes from "prop-types";

function CustomTable(props) {
  //   const { isSidebarOpen } = props;
  //   const [tableWidth, setTableWidth] = useState('100%');

  //   // Function to update table width based on sidebar state
  //   const updateTableWidth = () => {
  //     const newWidth = isSidebarOpen ? 'calc(100% - 100px)' : '100%';
  //     setTableWidth(newWidth);
  //   };

  //   // Call the function when the sidebar state changes
  //   useEffect(() => {
  //     updateTableWidth();
  //   }, [isSidebarOpen]);
  return (
    <>
      <div style={{ width: "100%", height: "100%", overflowX: "hidden" }}>
        <DataGrid
          rows={props.data}
          columns={props.headers}
          pageSize={props.pagesize}
          autoHeight
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "white",
              color: "black",
              fontSize: "16px",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell": {
              fontSize: "16px",
              minHeight: "48px", // Adjust the height of cells as needed
              borderBottom: `1px solid black`, // Add a border between rows
            },
            "& .MuiDataGrid-row:nth-of-type(even)": {},
            "& .MuiDataGrid-row:hover": {},
          }}
        />
      </div>
    </>
  );
}

export default CustomTable;
