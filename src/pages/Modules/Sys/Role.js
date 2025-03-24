import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./index.css"
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'mail', headerName: 'mail', width: 180 },
  {
    field: 'phone',
    headerName: 'phone',
    width: 130,
  },
  {
    field: 'status',
    headerName: 'status',
    description: 'This column has a value getter and is not sortable.',
  },
  { field: 'createtime', headerName: 'createtime', width: 130 },
  { field: 'option', headerName: 'option' },
];

const rows = [
  { id: 1, name: 'Snow', mail: 'root@ecshop.com', phone: 18962564312, status: 1, createtime: '20250202', option: 1 },
  { id: 2, name: 'Lannister', mail: 'root@ecshop.com', phone: 18962564312, status: 1, createtime: '20250202', option: 1 },
  { id: 3, name: 'Lannister', mail: 'root@ecshop.com', phone: 18962564312, status: 1, createtime: '20250202', option: 1 },
  { id: 4, name: 'Stark', mail: 'test', phone: 18962564312, status: 1, createtime: '20250202', option: 1 },
  { id: 5, name: 'Targaryen', mail: '', phone: null, status: 1, createtime: '20250202', option: 1 },
  { id: 6, name: 'Melisandre', mail: null, phone: 18962564312, status: 1, createtime: '20250202', option: 1 },
  { id: 7, name: 'Clifford', mail: '', phone: 18962564312, status: 1, createtime: '20250202', option: 1 },
  { id: 8, name: 'Frances', mail: 'root@ecshop.com', phone: 18962564312, status: 1, createtime: '20250202', option: 1 },
  { id: 9, name: 'Roxie', mail: 'root@ecshop.com', phone: 18962564312, status: 1, createtime: '20250202', option: 1 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function BasicTextFields() {
  return (

    <div className='card-div'>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >

        <TextField id="outlined-basic" label="name" variant="outlined" />
        <Button variant="contained">search</Button>
        <Button variant="contained">create</Button>
        <Button variant="contained">delete</Button>

      </Box>
      <Paper sx={{ width: '100%', height: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0, width: '100%' }}
        />
      </Paper>
    </div>
  );
}
