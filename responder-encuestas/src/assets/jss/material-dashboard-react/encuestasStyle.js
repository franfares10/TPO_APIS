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

  h6:{
    padding: "0",
    margin: "0"
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
  },

  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: 'rgb(30, 154, 159)',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: 'rgb(30, 154, 159)',
    },
  },

  margin: {
    zIndex: "4",
    margin: "0"
  },
  searchIcon: {
    width: "17px",
    zIndex: "4"
  },
}

export default encuestasStyle