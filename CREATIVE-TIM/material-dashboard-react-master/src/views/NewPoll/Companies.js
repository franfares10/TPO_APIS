import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/CompaniesComponents/Page.js';
import Results from '../../components/CompaniesComponents/Results.js';
import Toolbar from '../../components/CompaniesComponents/Toolbar.js';
import data from 'variables/data.js';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

export default function CustomerListView() {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

