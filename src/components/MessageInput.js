import { useState, useContext } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';

const MessageInput = () => {
  const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      message: message,
      timestamp: serverTimestamp(),
    });
    setMessage('');
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '70%',
        }}
      >
        <AccountCircle sx={{ color: 'action.active', my: 1.2 }} />
        <TextField
          id="input-with-sx"
          fullWidth
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
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
      <Button onClick={sendMessage} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </>
  );
};

export default MessageInput;
