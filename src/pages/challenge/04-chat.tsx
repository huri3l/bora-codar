import { ChatScreen } from '@/components/04-chat/ChatScreen';

const ChatPage = () => {
  const chat = {
    destinatary: {
      name: 'amor da minha vida 💜💜',
      image: 'todo',
      status: 'Online',
    },
    messages: {
      '2023-05-12 11:00': [],
    },
  };

  return (
    <main className="w-screen h-screen bg-[#1A1924]">
      <ChatScreen />
    </main>
  );
};

export default ChatPage;
