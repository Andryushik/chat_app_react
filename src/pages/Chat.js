import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { Context } from '../index';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import Loader from '../components/Loader';
import FooterBar from '../components/FooterBar';

const Chat = () => {
  const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);

  const [messages, loading, error] = useCollectionData(
    query(collection(db, 'messages'), orderBy('timestamp', 'desc')),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Error to load chat: {error.message}</h1>;
  }

  console.log('messages', messages);

  return (
    <>
      <CssBaseline />
      <Paper square sx={{ pb: '50px', px: 5 }}>
        <List sx={{ mb: 2, mt: 8 }}>
          {messages &&
            messages.map(
              ({ timestamp, displayName, message, photoURL, uid }, index) => (
                <div key={index}>
                  <ListSubheader
                    sx={{
                      width: 'fit-content',
                      bgcolor: 'background.paper',
                      marginLeft: user.uid === uid ? 'auto' : '10px',
                    }}
                  >
                    Send{' '}
                    {timestamp
                      ? timestamp.toDate().toString().slice(0, 25)
                      : 'just now'}
                  </ListSubheader>
                  <ListItem
                    button
                    sx={{
                      minWidth: '25%',
                      border:
                        user.uid === uid ? '1px solid blue' : '2px solid green',
                      borderRadius: '25px',
                      marginLeft: user.uid === uid ? 'auto' : '10px',
                      width: 'fit-content',
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={photoURL} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={message}
                      secondary={`from ${displayName}`}
                    />
                  </ListItem>
                </div>
              ),
            )}
        </List>
      </Paper>
      <FooterBar />
    </>
  );
};

export default Chat;
