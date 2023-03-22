import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { AuthContext } from '../context/GlobalState';
import addMessage from '../utils/addMessage';

const MessageInput = () => {
  const { user, db } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();

    if (!message) return alert('Please enter a message');

    await addMessage(message, user, db);
    setMessage('');
  };

  if (!user) return null;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          minWidth: '70%',
        }}
      >
        <form
          noValidate
          autoComplete="off"
          onSubmit={sendMessage}
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
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
              input: { color: 'black' },
              bgcolor: 'white',
              borderRadius: 7,
              px: 3,
              py: 0.6,
              mx: 2,
            }}
          />
          <Button
            size="large"
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </Box>
    </>
  );
};

export default MessageInput;
