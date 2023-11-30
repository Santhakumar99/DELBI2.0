import React from 'react'
import {DataGrid,GridValueGetterParams,GridColDef} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


const UsersList = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'age', headerName: 'Age', width: 130 },
        {
          field: 'address',
          headerName: 'Address',
          type: 'string',
          width: 290,
        },
        {
          field: 'mobile',
          headerName: 'Mobile',
          type: 'mobile',
          width: 190,
        },
        {
          field: "action",
          headerName: "Edit",
          width: 100,
          disableClickEventBubbling: true,
          renderCell: (params) => (
            <IconButton
              onClick={(event) => {
                // getRowData(params.row.id)
                // event.ignore = true;
                // console.log("id",params.row.id);
              }}
            >
              <EditIcon />
            </IconButton>
          )
        },
        {
          field: "action 1",
          headerName: "Delete",
          width: 100,
          disableClickEventBubbling: true,
          renderCell: (params) => (
            <IconButton
              onClick={(event) => {
                // getRowData(params.row.id)
                // event.ignore = true;
                // console.log("id",params.row.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          )
        }
      ];

          return (
    <div style={{ height: 400, width: '100%' }}>
    <div className='addbuttonRow' style={{alignItems:"end",margin:"20px"}}>

  <Button variant="outlined" startIcon={<PersonAddIcon />}>
Add User
</Button>
    </div>
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </div>
  )
}

export default UsersList