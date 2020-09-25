import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SendIcon from '@material-ui/icons/Send';
import Button from "components/CustomButtons/Button";
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridContainer'

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

const ObsInput = withStyles({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: cyan[600]
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "grey"
    }
  },
  after: {},
})((props) => <TextField {...props} />);

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

      <Box>
        <Card>
          <CardContent>
            <GridContainer justify="space-evenly" spacing={3}>
              <div>
                <GridItem>
                  <Box width="1200px" stats>
                    <ObsInput
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
                </GridItem>
              </div>
              <GridItem>
                <div stats >
                  <Button color="primary">
                    <SendIcon />
                  Lanzar
                </Button>
                </div>
              </GridItem>
            </GridContainer>
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
