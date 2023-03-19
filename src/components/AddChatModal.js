import { useState } from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styleModal } from '../utils/constants';

const AddChatModal = ({ open, setOpen }) => {
  const [chatName, setChatName] = useState(`New Chat`);

  const handleClose = () => setOpen(false);

  return (
    <>
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
    </>
  );
};

export default AddChatModal;
