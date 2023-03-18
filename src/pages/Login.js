import GoogleButton from 'react-google-button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { Context } from '../index';

const Login = () => {
  const { auth } = useContext(Context);

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Paper elevation={5} sx={{ p: 5, m: 3 }}>
          <Button
            onClick={signInGoogle}
            fullWidth
            variant="contained"
            sx={{ my: 2 }}
          >
            Enter with Google
          </Button>
          <GoogleButton onClick={signInGoogle} />
          <Grid container spacing={3}>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
