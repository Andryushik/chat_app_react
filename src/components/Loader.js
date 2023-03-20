import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Loader = () => {
  return (
    <Container>
      <CssBaseline />
      <Stack spacing={1}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={1200}
          height={150}
        />
        <Skeleton
          animation="wave"
          variant="circular"
          width={100}
          height={100}
        />
        <Skeleton animation="wave" variant="rounded" width={500} height={60} />
        <Skeleton animation="wave" variant="rounded" width={900} height={40} />
        <Skeleton animation="wave" variant="rounded" width={200} height={30} />
        <Skeleton animation="wave" variant="rounded" width={300} height={80} />
        <Skeleton animation="wave" variant="rounded" width={1100} height={50} />
        <Skeleton animation="wave" variant="rounded" width={300} height={20} />
        <Skeleton animation="wave" variant="rounded" width={900} height={100} />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={1200}
          height={150}
        />
      </Stack>
    </Container>
  );
};

export default Loader;
