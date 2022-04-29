import React from "react";
import "./UserList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const UserList = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70,  },
    {
      field: "img",
      headerName: "img",
      width: 200, 
      renderCell: (e)=>(
        <div>
        <img className="userImg" src={e.row.img} alt="" />
        </div>
      )
     
    },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 150,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      img: "https://i.ibb.co/30j89QN/image.png",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      img: "https://i.ibb.co/XXGP3HB/image.png",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      img: "https://i.ibb.co/8mYvCPj/image.png",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      img: "https://i.ibb.co/72BscqT/image.png",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: 33,
      img: "https://i.ibb.co/bdH0T5y/image.png",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      age: 150,
      img: "https://i.ibb.co/Rpzb2z4/image.png",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      img: "https://i.ibb.co/kBHCzQW/image.png",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      img: "https://i.ibb.co/XLCSL8S/image.png",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      img: "https://i.ibb.co/nwqD63W/image.png",
    },
  ];
  return (
    <div className="UserList">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserList;
