import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import { AlignCenter } from 'react-feather';
import {respuestaPorId} from "controller/appController"

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));




const TrafficByDevice = (propp) => {
  const classes = useStyles();
  const theme = useTheme();
  
  console.log("PROPSSS")

console.log(propp)

var empresa = propp.empresa
var lanzamiento = propp.lanzamiento

const propiedades = async (empresa,lanzamiento) =>{
  var respuesta = await respuestaPorId(lanzamiento._id,empresa._id)
  console.log("RESPUESTAAA")
  console.log(respuesta);
  var opcionales = respuesta.data.questions.total - respuesta.data.mandatory 
  var respondidas = respuesta.data.answered
  var faltan = respuesta.data.questions.total - respondidas
  
  var data = {
      opcional: opcionales,
      respondidas: respondidas,
      noRespondidas: faltan
  }

  return data
}

 propiedades(empresa,lanzamiento)
console.log("infoo")

  const data = {
    datasets: [
      {
        data:[1,2,3],
        backgroundColor: [
          colors.green[600],
          colors.red[600],
          colors.orange[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Respondidas', 'Sin responder', 'Opcionales']
  };



  
  
  
  const options = {
    animation: false,
    cutoutPercentage: 75,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };
 
  
  //Para poner los valores directos a value, no se puede hacer un data[0] pq es un objeto en JSON. Hay que entrar por el JSON , agarrar el primer objeto y despues la data con el subindice.
  const devices = [
    {
      title: 'Respondidas',
      value: data.datasets[0].data[0],
      icon: CheckIcon,
      color: colors.green[600]
    },
    {
      title: 'Sin responder',
      value: data.datasets[0].data[1],
      icon: ClearIcon,
      color: colors.red[600]
    },
    {
      title: 'Opcionales',
      value: data.datasets[0].data[2],
      icon:ErrorIcon ,
      color: colors.orange[600]
    }
  ];




  


  return(
    <Card
      
    >
      <CardHeader title="% DE RESPUESTAS" allign={AlignCenter}/>
      <Divider />
      <CardContent>
        <Box
          height={300}
          position="relative"
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              p={1}
              textAlign="center"
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>

  );
};



export default TrafficByDevice;
