import { useNavigate } from 'react-router-dom';
import { Button, Flex, Message } from '../components';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Flex style={{ flexDirection: 'column' }}>
      <Message style={{ marginTop: '5rem' }}>No results found</Message>
      <Button style={{ margin: '3rem auto' }} onClick={() => navigate('/')}>
        Return to home
      </Button>
    </Flex>
  );
}
