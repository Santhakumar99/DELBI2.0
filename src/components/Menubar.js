import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import MailIcon from '@mui/icons-material/DeleteIcon';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Routes,
} from "react-router-dom";
import HealthDashboard from './HealthDashboard';
import CountDashboard from './CountDashboard';
// import * as React from 'react';
// import Box from '@mui/material/Box';
import {DataGrid,GridValueGetterParams,GridColDef} from '@mui/x-data-grid';
import { useState } from 'react';
// import  from '@mui/x-data-grid';
// import  from '@mui/x-data-grid';

import {useNavigate} from 'react-router-dom';

// export default function App() {
 
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     // valueGetter: (params: GridValueGetterParams) =>
//     //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];
<React.Fragment>
<Routes>
  <Route path="/counts" exact>
    <CountDashboard/>
  </Route>
  <Route path="/health" exact>
<HealthDashboard/>
  </Route>

  {/* <Redirect to="/login" /> */}
  </Routes>
</React.Fragment>


export default function PersistentDrawerLeft() {
  // const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  React.useEffect(() => {
    fetchData();
    // var LoggedUser;
  }, []);
  const fetchData = async () => {

    // if (token) {
      try {
        // setIsLoading(true);
        const result = await axios
          .get("http://localhost:7400/users/AllUsers")
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

        // if (result && result.data) {
        //   let data = result?.data?.data;
        //   setRows(data);
        //   setIsLoading(false);
        // }
      } catch (err) {
        // setIsLoading(false);
  
        // handleClickOpen("Something went wrong !!!");
      }
    }
  const getRowData =(data)=>{

    console.log("row data", data)

  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigateToUsers = () => {
    // navigate('/users', {replace: true});
  };
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
            getRowData(params.row.id)
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
            getRowData(params.row.id)
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DELBI-2.0
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
            <b></b>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Count Dashboard', 'Health Dashboard', 'Reports', 'Settings', 'Users'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
    









    {/* <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box> */}

    <div style={{ height: 400, width: '100%' }}>
      <div className='addbuttonRow' style={{alignItems:"end",margin:"20px"}}>

    <Button variant="outlined" startIcon={<PersonAddIcon />} onClick={navigateToUsers()}> 
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







        </Typography>
        <Typography paragraph>
          
        </Typography>
      </Main>
    </Box>
  );
}