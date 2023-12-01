import React from 'react'
import {DataGrid,GridValueGetterParams,GridColDef} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import axios from 'react';
import { useState,useDeferredValue } from 'react';

const UsersList = () => {

  const [data, setData] = useState([]);
  React.useEffect(() => {
    fetchData();
    // var LoggedUser;
  }, []);
  const fetchData = async () => {

    // if (token) {
      try {
        // setIsLoading(true);
        const result = await axios.get("http://localhost:7400/users/AllUsers")
          .catch((error) => {
            console.log("error ", error.response.data.errors[0].msg);         
          });
            console.log(result,"users")
       
        if (result.data) {
          let array = result.data;
          for (let i = 0; i < array.length; i++) {
            const element = array[i];
            element.id = i + 1;
          }
          setData(array);
          console.log(array,"data")
          // setIsLoading(false);
        }
      } catch (err) {

      }
    }
    const columns = [
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