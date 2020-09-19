import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SendIcon from '@material-ui/icons/Send';
import Button from "components/CustomButtons/Button";

import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
    
      <Box mt={3}>
        <Card>
          <CardContent>
          <div>
            <Box width="800px" stats>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="medium"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Buscar empresa"
                variant="outlined"
              />
             </Box>
          </div>
              <div stats >
                <Button color = "primary">
                  <SendIcon/>
                  Send
                </Button>
                </div>       
          </CardContent>
        </Card>
      </Box>
      </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
