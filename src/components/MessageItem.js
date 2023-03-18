import { useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import { AuthContext } from '../context/GlobalState';

const MessageItem = ({ timestamp, displayName, message, photoURL, uid }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <ListSubheader
        sx={{
          width: 'fit-content',
          bgcolor: 'background.paper',
          marginLeft: user.uid === uid ? 'auto' : '10px',
        }}
      >
        Send{' '}
        {timestamp ? timestamp.toDate().toString().slice(0, 25) : 'just now'}
      </ListSubheader>
      <ListItem
        button
        sx={{
          minWidth: '25%',
          border: user.uid === uid ? '1px solid blue' : '2px solid green',
          borderRadius: '25px',
          marginLeft: user.uid === uid ? 'auto' : '10px',
          width: 'fit-content',
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Profile Picture" src={photoURL} />
        </ListItemAvatar>
        <ListItemText primary={message} secondary={`from ${displayName}`} />
      </ListItem>
    </>
  );
};

export default MessageItem;
