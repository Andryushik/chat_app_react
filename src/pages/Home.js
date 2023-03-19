import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ChatIcon from '@mui/icons-material/Chat';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../context/GlobalState';
import { LOGIN_ROUTE } from '../utils/constants';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <CssBaseline />
      <Box
        marginTop={20}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
          <ChatIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Chat application
        </Typography>
        <Paper
          elevation={5}
          sx={{
            width: 400,
            p: 5,
            m: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h2" variant="h6">
            {`Welcome ${user ? user.displayName : 'Guest'}!`}
          </Typography>
          <Button
            onClick={() => navigate(LOGIN_ROUTE)}
            fullWidth
            variant="contained"
            sx={{ my: 3 }}
          >
            {`Enter ${user ? 'to the chat' : 'with Google'}`}
          </Button>
          <Grid container spacing={3}>
            <Grid item xs>
              <Link href="#" variant="body2">
                {user ? 'Change password' : 'Forgot password?'}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {user ? 'Settings' : 'Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
