const encuestasStyle = {
  html: {
    boxSizing: 'border-box',
    fontSize: '62.5%'
  },

  body: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '6rem'
  },

  h4:{
    paddingLeft: "10px",
    paddingTop: "10px"
  },

  encuestaCard: {
    height: '200px',
    width: '400px',
    position: 'relative',
    display: 'inline-block',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    paddingTop: '150px',
    margin: '2em',
    "&:hover": {
      transform: 'translateY(-.5%)',
      boxShadow: '0 4rem 8rem rgba(0, 0, 0, .2)'
    },
    "& img": {
      height: '200px',
      width: '400px',
      maxHeight: '100%',  
      maxWidth: '100%',
      position: 'absolute',  
      top: '0',
      margin: 'auto'
    },
    "& h4": {
      position: 'absolute',
      left: '5%',
      bottom: '20%',
      fontSize: '150%'
    },
    "& p": {
      position: 'absolute',
      left: '5%',
      bottom: '16%',
      fontSize: '150%'
    },

    "& button": {
      color: 'white',
      height: '40px',
      width: '80%',
      backgroundColor: 'rgb(30, 154, 159)',
      position: 'absolute',
      left: '10.5%',
      bottom: '5%',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '3px',
      transition: '0.3s',
      opacity: '1',
      outline:'none',
      "&:hover": {
        opacity: '0.6'
      }
    }
  },

  infoEncuestaCard: {
    padding: '2px 16px'
  }
}

export default encuestasStyle