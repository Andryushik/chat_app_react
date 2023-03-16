import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LOGIN_ROUTE } from '../utils/constants';
// import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const navigate = useNavigate();
  const user = false;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat App
          </Typography>
          {user ? (
            <Button color="inherit" onClick={() => navigate('/')}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate(LOGIN_ROUTE)}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
