import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MoreIcon from '@mui/icons-material/MoreVert';
import { styleModal, styleFab } from '../utils/constants';
import MessageInput from './MessageInput';

const FooterBar = () => {
  const [open, setOpen] = useState(false);
  const [chatName, setChatName] = useState(`New Chat`);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>

        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          onClick={handleOpen}
          sx={styleFab}
        >
          <AddIcon />
        </Fab>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={styleModal}>
              <TextField
                id="outlined-static"
                label="Create Chat"
                value={chatName}
                onChange={(event) => {
                  setChatName(event.target.value);
                }}
              />
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => {
                  setChatName(`New Chat`);
                  handleClose();
                }}
              >
                add chat
              </Button>
            </Box>
          </Fade>
        </Modal>
        <Box sx={{ flexGrow: 1 }} />
        <MessageInput />
      </Toolbar>
    </AppBar>
  );
};

export default FooterBar;
