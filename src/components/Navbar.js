import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/constants';
import { useAuthContext } from '../context/GlobalState';
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FadeMenu from './FadeMenu';

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, user, darkMode, setDarkMode } = useAuthContext();
  const handleThemeChange = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <FadeMenu />

          <div style={{ width: '100%' }}>
            <Link
              href={HOME_ROUTE}
              color="inherit"
              variant="h5"
              underline="none"
              sx={{ flexGrow: 1, whiteSpace: 'nowrap' }}
            >
              Chat App
            </Link>
          </div>

          <Switch
            checked={darkMode}
            onChange={handleThemeChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          {darkMode ? (
            <LightModeIcon sx={{ mr: 10 }} />
          ) : (
            <ModeNightIcon sx={{ mr: 10 }} />
          )}

          {user ? (
            <>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={user.photoURL} />
              </ListItemAvatar>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  auth.signOut();
                  navigate(HOME_ROUTE);
                }}
                sx={{ minWidth: 'max-content' }}
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <ListItemAvatar>
                <AccountCircleIcon fontSize="large" sx={{ mt: 0.7 }} />
              </ListItemAvatar>
              <Button
                size="large"
                variant="contained"
                onClick={() => navigate(LOGIN_ROUTE)}
                sx={{ minWidth: 'max-content' }}
              >
                Sign in
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
