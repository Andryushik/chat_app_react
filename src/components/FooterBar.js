import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useAuthContext } from '../context/GlobalState';
import { styleFab } from '../utils/constants';
import MessageInput from './MessageInput';
import NewNotification from './NewNotification';
import AddChatModal from './AddChatModal';

const FooterBar = () => {
  const { user } = useAuthContext();
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
          size="small"
          color="secondary"
          aria-label="New Chat"
          onClick={handleOpen}
          sx={styleFab}
        >
          <AddIcon />
        </Fab>
        <AddChatModal open={open} setOpen={setOpen} />
        {user && <NewNotification />}
        <Box sx={{ flexGrow: 1 }} />
        {user && <MessageInput />}
      </Toolbar>
    </AppBar>
  );
};

export default FooterBar;
