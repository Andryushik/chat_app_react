import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LOGIN_ROUTE } from '../utils/constants';
import { GlobalContext } from '../context/GlobalState';

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, user } = useContext(GlobalContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat App
          </Typography>
          {user ? (
            <>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={user.photoURL} />
              </ListItemAvatar>
              <Button
                variant="contained"
                onClick={() => {
                  auth.signOut();
                  navigate('/');
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button variant="contained" onClick={() => navigate(LOGIN_ROUTE)}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
