import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { HOME_ROUTE, CHAT_ROUTE, LOGIN_ROUTE } from '../utils/constants';
import { useAuthContext } from '../context/GlobalState';
import deleteChatHistory from '../utils/deleteChatHistory';
import { adminUid } from '../utils/constants';

const FadeMenu = () => {
  const navigate = useNavigate();
  const { auth, user, db } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            navigate(HOME_ROUTE);
            handleClose();
          }}
        >
          HOME
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate(CHAT_ROUTE);
            handleClose();
          }}
        >
          CHAT
        </MenuItem>

        {!user && (
          <MenuItem
            onClick={() => {
              navigate(LOGIN_ROUTE);
              handleClose();
            }}
          >
            LOGIN
          </MenuItem>
        )}

        {user && (
          <div>
            <MenuItem disabled onClick={handleClose}>
              SETTINGS
            </MenuItem>
            <MenuItem
              onClick={() => {
                auth.signOut();
                navigate(HOME_ROUTE);
                handleClose();
              }}
            >
              LOGOUT
            </MenuItem>
          </div>
        )}

        {user?.uid === adminUid ? (
          <MenuItem
            onClick={() => {
              deleteChatHistory(db);
              handleClose();
            }}
          >
            CLEAN
          </MenuItem>
        ) : null}
      </Menu>
    </div>
  );
};

export default FadeMenu;
