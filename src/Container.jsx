import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default function FixedContainer() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography component="div" />
      </Container>
    </>
  );
}
