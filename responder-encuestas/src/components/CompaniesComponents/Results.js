import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles, lighten } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import{getEmpresaPorId} from "controller/empresa.controller"
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'assets/jss/getInitials.js';
import { useDividerActions } from 'components/Divider/DividerProvider';
import { useDividerState } from 'components/Divider/DividerProvider';
import CardHeader from 'components/Card/CardHeader';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

const ObsCheckbox = withStyles({
  root: {
    color: [400],
    '&$checked': {
      color: cyan[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {},
    avatar: {
      marginRight: theme.spacing(2)
    },
  }));

const Results = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [selected,setSelected] = useState([]) 
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [alpha,setAlpha] = useState([])
  const getSelected = () =>{
    return selectedCustomerIds;
  }

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;
    let seleccionados
    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer._id);
      seleccionados = customers.map((customer) => customer.nombreEmpresa);
    } else {
      newSelectedCustomerIds = [];
      seleccionados = []
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id._id);
    let seleccionados = []
    let a = []
    let newSelectedCustomerIds = [];
    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id._id);
     seleccionados = seleccionados.concat(selected,id.nombreEmpresa)
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
      seleccionados = seleccionados.concat(selected.slice(1))
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
      seleccionados = seleccionados.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );

      seleccionados = seleccionados.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );


    }


    setSelectedCustomerIds(newSelectedCustomerIds);
    setSelected(seleccionados);
    //console.log(selected)


    //console.log(a)
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    
};
  const { setFlag } = useDividerActions();

  const { setEmpresas } = useDividerActions();
  
  const {setFecha} = useDividerActions();

  const cambiar = () =>{
    if(selectedCustomerIds.length!==0 && selectedDate!==null){
      console.log(selectedCustomerIds)
      console.log(selectedDate)
        return false
    }else{
      return true
    }
  }

  useEffect(() => {
    setFlag(cambiar());
    setEmpresas(selectedCustomerIds);
    setFecha(selectedDate)
    
  }, [selectedCustomerIds, setFlag, setEmpresas,setFecha])

  
  return (

    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
    <CardHeader>
    <GridContainer direction = "row">
          <GridItem>
                <h4 >Ingrese fecha de Vencimiento</h4>
        </GridItem>
        <GridItem>
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                
                                autoOk={true}
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="fecha1"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                invalidDateMessage={'Ingrese un formato de fecha valido (dd/mm/AA)'}
                            />
                          
                        </MuiPickersUtilsProvider>
                        </GridItem>
                        </GridContainer>      
    </CardHeader>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <ObsCheckbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Nombre Empresa
                </TableCell>
                <TableCell>
                  CUIT
                </TableCell>
                <TableCell>
                  Email Responsable
                </TableCell>
                <TableCell>
                  Teléfono Responsable
                </TableCell>
                <TableCell>
                  Fecha de registro
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer._id}
                  selected={selectedCustomerIds.indexOf(customer._id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <ObsCheckbox
                      checked={selectedCustomerIds.indexOf(customer._id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={customer.avatarUrl}
                      >
                        {getInitials(customer.responsable.nombreResponsable)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.nombreEmpresa}
                      </Typography>
                    </Box>
                    </TableCell>
                    <TableCell>
                    {customer.CUIT}
                  </TableCell>
                 
                  <TableCell>
                    {customer.responsable.email}
                  </TableCell>
                  <TableCell>
                    {customer.responsable.telefono}
                  </TableCell>
                  <TableCell>
                    {moment(customer.timestamp).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results;
