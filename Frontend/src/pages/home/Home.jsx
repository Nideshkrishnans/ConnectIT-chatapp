import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';
import useConversation from '../../zustand/useConversation';

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="flex h-[100dvh] md:h-[90vh] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 w-full max-w-[1200px] mx-auto">
      
      {/* Sidebar – show full on small screens if no chat, or 30% on md+ */}
      <div
        className={`${
          selectedConversation ? 'hidden' : 'flex'
        } md:flex flex-col w-full md:w-[30%] border-r border-gray-600`}
      >
        <Sidebar />
      </div>

      {/* Message Container – show only on chat selected (on sm), always show on md+ */}
      <div
        className={`${
          selectedConversation ? 'flex' : 'hidden'
        } md:flex flex-col w-full md:w-[70%]`}
      >
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
