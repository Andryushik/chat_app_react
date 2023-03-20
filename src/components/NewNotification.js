import { useLocation } from 'react-router-dom';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import IconButton from '@mui/material/IconButton';
import useNotification from '../hooks/useNotification';
import useGetMessages from '../hooks/useGetMessages';
import playNotification from '../utils/playNotification';

const NewNotification = () => {
  const location = useLocation();
  const [messages] = useGetMessages();

  let unread = useNotification(messages.length);
  unread && playNotification();

  if (location.pathname === '/chat') {
    unread = false;
  }

  return (
    <>
      <IconButton color="inherit" sx={{ ml: 3 }}>
        {unread ? (
          <MarkUnreadChatAltIcon fontSize="large" />
        ) : (
          <MarkChatReadIcon fontSize="large" />
        )}
      </IconButton>
    </>
  );
};

export default NewNotification;
