import { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { AuthContext } from '../context/GlobalState';
import { styleFab } from '../utils/constants';
import MessageInput from './MessageInput';
import NewMessageIcon from './NewMessageIcon';
import AddChatModal from './AddChatModal';

const FooterBar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (user) {
      setOpen(true);
    } else {
      alert('Please log in first!');
    }
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Fab
          size="medium"
          color="secondary"
          aria-label="New Chat"
          onClick={handleOpen}
          sx={styleFab}
        >
          <AddIcon />
        </Fab>
        <AddChatModal open={open} setOpen={setOpen} />
        {user && <NewMessageIcon />}
        <Box sx={{ flexGrow: 1 }} />
        <MessageInput />
      </Toolbar>
    </AppBar>
  );
};

export default FooterBar;
