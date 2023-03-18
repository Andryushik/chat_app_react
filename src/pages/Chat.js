import { useContext } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Loader from '../components/Loader';
import MessageItem from '../components/MessageItem';
import { AuthContext } from '../context/GlobalState';
import useChatScroll from '../hooks/useChatScroll';

const Chat = () => {
  const { db } = useContext(AuthContext);

  const [messages, loading, error] = useCollectionData(
    query(collection(db, 'messages'), orderBy('timestamp')),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  const ref = useChatScroll(messages); // FIXME:  doesn't work !

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log('messages', messages);

  return (
    <>
      <CssBaseline />
      <Paper square sx={{ pb: '50px', px: 5 }}>
        <List sx={{ mb: 2, mt: 8 }}>
          <div ref={ref}>
            {messages &&
              messages.map((props, index) => (
                <MessageItem {...props} key={index} />
              ))}
          </div>
        </List>
      </Paper>
    </>
  );
};

export default Chat;
