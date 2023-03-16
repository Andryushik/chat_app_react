import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Container>
      <CssBaseline />
      <Box
        marginTop={10}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={5} sx={{ p: 5, m: 3 }}>
          <Typography variant="h6">Loading...</Typography>
          <CircularProgress color="secondary" />
        </Paper>
      </Box>
    </Container>
  );
};

export default Loader;
