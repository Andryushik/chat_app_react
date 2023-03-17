import { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MoreIcon from '@mui/icons-material/MoreVert';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { styleModal, styleFab, messages } from '../utils/constants';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Chat = () => {
  const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [chatName, setChatName] = useState(`New Chat`);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    setMessage('');
    // db.collection('chats').add({
    //   name: chatName,
    //   messages: [message],
    // });
  };

  return (
    <>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pt: 10, pb: 0 }}
        >
          Inbox
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <div key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}

              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </div>
          ))}
        </List>
      </Paper>

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

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              width: '70%',
            }}
          >
            <AccountCircle sx={{ color: 'action.active', my: 1.5 }} />
            <TextField
              id="input-with-sx"
              fullWidth
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              // label="Your message..."
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                backgroundColor: 'white',
                borderRadius: 7,
                px: 3,
                my: 0.8,
                mx: 2,
              }}
            />
          </Box>
          <Button
            onClick={sendMessage}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Chat;
