import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Layout from "../../../Components/Layout/Layout";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const columns = [
  { id: "name", label: "Date", minWidth: 170, align: "center" },
  { id: "code", label: "Sub\u00a0Division", minWidth: 100, align: "center" },
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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
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

  const showBackButton = true;

  return (
    <Layout title={title} showBackButton={showBackButton}>
        <div style={{marginTop:100}}>
        
        <select style={{width:"12%", marginBottom: "10px"}} aria-describedby={id} variant="contained" onClick={handleClick}> </select>
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
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2, flexWrap:'wrap', gap: 30 }}>
         <div>
         <FormControl variant="filled">
            <InputLabel id="subdivision-label">Sub Division</InputLabel>
            <Select
              labelId="subdivision-label"
              id="subdivision"
              value={subDivision}
              onChange={handleChangeSubDivision}
              label="Sub Division"
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
          <FormControl variant="filled">
            <InputLabel id="feeders-label">Feeders</InputLabel>
            <Select
              labelId="feeders-label"
              id="feeders"
              value={feeders}
              onChange={handleChangeFeeders}
              label="Feeders"
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
         <FormControl variant="filled">
            <InputLabel id="daterange-label">Date Range</InputLabel>
            <input className='input-new-feeder' type='date' placeholder='DD/MM/YYYY' />   
          </FormControl>
         </div>
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
            {rows
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
