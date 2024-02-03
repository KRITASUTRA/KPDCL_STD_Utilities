import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Layout from '../../../Components/Layout/Layout';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const columns = [
  { id: "date",
    label: "Date",
    minWidth: 170,
    align: "center" 
  },
  { id: "code",
    label: "Sub\u00a0Division",
    minWidth: 100,
    align: "center" 
  },
  {
    id: "population",
    label: "Feeder",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "From",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "To",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Dummy",
    label: "Total Down Time Hours",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(date, code, population, size) {
  const density = population / size;
  return { date, code, population, size, density };
}

const rows = [
  createData('12-12-2023',"India", "IN", 1324171354, 3287263),
  createData('12-08-2023',"China", "CN", 1403500365, 9596961),
  createData('04-08-2023',"Italy", "Ten", 60483973, 301340),
  createData('29-07-2023',"United States", "US", 327167434, 9833520),
  createData('15-07-2023',"Canada", "CA", 37602103, 9984670),
  createData('02-07-2023',"Australia", "AU", 25475400, 7692024),
  createData('24-06-2023',"Germany", "DE", 83019200, 357578),
  createData('24-06-2023',"Ireland", "IE", 4857000, 70273),
  createData('20-06-2023',"Mexico", "MX", 126577691, 1972550),
  createData('20-06-2023',"Japan", "JP", 126317000, 377973),
  createData('16  -05-2023',"France", "FR", 67022000, 640679),
  createData('05-05-2023',"United Kingdom", "GB", 67545757, 242495),
  createData('01-05-2023',"Russia", "RU", 146793744, 17098246),
];

function PumpEnergyTable({title}) {
  const [filter, setFilter] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const [subDivision, setSubDivision] = React.useState('');
  const [feeders, setFeeders] = React.useState('');
  const [dateRange, setDateRange] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const handleChangeSubDivision = (event) => {
    setSubDivision(event.target.value);
  };
  const handleChangeFeeders = (event) => {
    setFeeders(event.target.value);
  };
  const handleChangeDateRange = (event) => {
    setDateRange(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleViewButtonClick = () => {
    const selectElement = document.getElementById('subdivision');
    if (selectElement) {
      selectElement.value = subDivision;
    }
    handleClose();
  };
  
  const filteredRows = rows.filter((row) => {
   
    const isSubDivisionMatch = !subDivision || row.code === subDivision;
    const isFeedersMatch = !feeders || row.population === feeders;
    const isDateMatch = true; // Replace 'true' with your actual filtering condition.
  
    // Return true only if all conditions match.
    return isSubDivisionMatch && isFeedersMatch && isDateMatch;
  });

  const showBackButton = true;

  return (
    <Layout title={title} showBackButton={showBackButton}>
        <div style={{marginTop:100}}>
        
        <select style={{width:"12%", color:'black',marginLeft:"16px", marginBottom: "10px"}} aria-describedby={id} variant="contained" onClick={handleClick}> </select>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          style={{ marginTop: '-10px', width:'25rem'}}
        >
        <Box sx={{ display:'flex', marginBottom: 2, flexWrap:'wrap',flexDirection:'column',padding:'0px 10px', }}> 
          <div style={{flexDirection:columns, padding:"10px 50px"}}>
          <text>Filter</text>
          <button onClick={handleClose} style={{color:'darkgreen',marginLeft:"10rem"}}>
             Close</button>
          </div>
          <div className="hr-lin" />
          <div>
         <InputLabel id="subdivision-label">Sub Division</InputLabel>
         <FormControl variant="filled" sx={{width:'90%'}}>
            
            <Select
              labelId="subdivision-label"
              id="subdivision"
              value={subDivision}
              onChange={handleChangeSubDivision}
              label="Sub Division"
              sx={{width:'auto', height:'30px'}}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Srinagar</MenuItem>
              <MenuItem value={20}>Srinagar</MenuItem>
              <MenuItem value={30}>Italy</MenuItem>
            </Select>
          </FormControl>
         </div>
          <div>
          <InputLabel id="feeders-label">Feeders</InputLabel>
          <FormControl variant="filled" sx={{width:'90%'}}>
            
            <Select
              labelId="feeders-label"
              id="feeders"
              value={feeders}
              onChange={handleChangeFeeders}
              label="Feeders"
              sx={{width:'auto', height:'30px'}}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div>
            <InputLabel id="daterange-label" sx={{ marginTop: 2}}>Date </InputLabel>
            <ToggleButtonGroup
              value={dateRange}
              exclusive
              onChange={handleChangeDateRange}
              aria-label="date range"
              style={{marginBottom: 2, marginTop: 1, width: 50}}
            >
              <ToggleButton value="date" aria-label="date" >
                Date
              </ToggleButton>
              <ToggleButton value="range" aria-label="range">
                Range
              </ToggleButton>
            </ToggleButtonGroup>
            {dateRange === 'date' ? (
              <FormControl variant="filled" sx={{width:'100%'}}>
                <input style={{width:'fit-content'}} className='input-new-feeder' type='date' placeholder='DD/MM/YYYY' />   
              </FormControl>
            ) : (
              <FormControl variant="filled" sx={{width:'100%', }}>
                <div  sx={{ flexWrap:'wrap',flexDirection:'row', }}>
                <strong>From</strong>
                <input style={{width:'fit-content', marginLeft:'5px'}} className='input-new-feeder' type='date' placeholder='From' /> 
                <strong style={{ marginLeft:'5px'}}>To</strong> 
                <input style={{width:'fit-content', marginLeft:'5px'}} className='input-new-feeder' type='date' placeholder='To' /> 
                  </div>  
              </FormControl>
            )}
         </div>
         <button
              style={{ marginLeft: '40%', marginTop: '10%', color: 'white', background: '#5F40A2', width: '15%', borderRadius: '10px' }}
              onClick={handleViewButtonClick}
            >
              View
            </button>
          <Typography> </Typography>
        </Box>
        </Popover>
    <Paper
      sx={{
        width: "95%",
        overflow: "hidden",
        margin: "0 auto",
        boxShadow: "none",
      }}
    >
      <TableContainer sx={{ maxHeight: 480 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#7f56d8",
                    color: "#fff",
                    padding: "25px 15px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {filteredRows
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  .map((row) => {
    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
        {columns.map((column) => {
          const value = row[column.id];
          return (
            <TableCell key={column.id} align={column.align}>
              {column.format && typeof value === "number"
                ? column.format(value)
                : value}
            </TableCell>
          );
        })}
      </TableRow>
    );
  })}

          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
    </Layout>
  );
}

export default PumpEnergyTable;
