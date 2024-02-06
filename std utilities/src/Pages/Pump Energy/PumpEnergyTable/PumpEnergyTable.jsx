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
    minWidth: 170,
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

  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedFromDate, setSelectedFromDate] = React.useState(null);
  const [selectedToDate, setSelectedToDate] = React.useState(null);

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

    let isDateMatch = true;

    if (dateRange === 'date') {
      // Single date filter
      isDateMatch = !selectedDate || row.date === selectedDate;
    } else if (dateRange === 'range') {
      // Date range filter
      const rowDate = new Date(row.date);
      const fromDate = new Date(selectedFromDate);
      const toDate = new Date(selectedToDate);

      isDateMatch = !selectedFromDate || !selectedToDate || (rowDate >= fromDate && rowDate <= toDate);
    }

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
              <MenuItem value={'Srinagar'}>Srinagar</MenuItem>
              <MenuItem value={'Srinagar'}>Srinagar</MenuItem>
              <MenuItem value={'Italy'}>Italy</MenuItem>
            </Select>
          </FormControl>
         </div>
          <div>
          <InputLabel sx={{marginTop:"20px"}} id="feeders-label">Feeders</InputLabel>
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
              <MenuItem value={'Ten'}>Ten</MenuItem>
              <MenuItem value={'IN'}>IN</MenuItem>
              <MenuItem value={'US'}>US</MenuItem>
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
