import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Loader from '../components/Loader';
import MessageItem from '../components/MessageItem';
import useChatScroll from '../hooks/useChatScroll';
import useGetMessages from '../hooks/useGetMessages';

const Chat = () => {
  const [messages, loading, error] = useGetMessages();

  const refScroll = useChatScroll(messages.length);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container data-testid="chat-page">
      <CssBaseline />
      <Paper
        ref={refScroll}
        square
        sx={{ pb: '50px', px: 5, minHeight: '90vh' }}
      >
        <List sx={{ mb: 2, mt: 8 }}>
          {messages &&
            messages.map((doc) => <MessageItem {...doc} key={doc.id} />)}
        </List>
      </Paper>
    </Container>
  );
};

export default Chat;
