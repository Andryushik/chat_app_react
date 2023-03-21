import GoogleButton from 'react-google-button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { HOME_ROUTE } from '../utils/constants';
import { useSignInGoogle } from '../hooks/useSignInGoogle';

const Login = () => {
  const signIn = useSignInGoogle();

  return (
    <Container data-testid="login-page">
      <CssBaseline />
      <Box
        marginTop={20}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Paper
          elevation={5}
          sx={{
            p: 5,
            m: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <GoogleButton onClick={signIn} />
          <Grid container sx={{ mt: 4 }}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignContent: 'center',
              }}
            >
              <Link href={HOME_ROUTE} variant="body1" sx={{ margin: '0 auto' }}>
                Homepage
              </Link>
            </div>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
