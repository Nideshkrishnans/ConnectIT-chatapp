import React from 'react'
import Messages from './Messages'
import MessageInput from './Messageinput'
import useConversation from '../../zustand/useConversation'
import { IoArrowBack } from 'react-icons/io5'
import { useAuthContext } from '../../context/Authcontext'
import {TiMessages} from 'react-icons/ti'

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div className='flex flex-col h-full w-full'>
      {!selectedConversation ? (
        <NoChatSelected/>
       ):(
        <>
        {/* TOP - Chat Header */}
      <div className='bg-sky-500 px-4 py-2 mb-2 flex items-center gap-2 text-white'>
        {/* Back Button on small screens */}
        <button className='sm:hidden' onClick={() => setSelectedConversation(null)}>
          <IoArrowBack size={24} />
        </button>
        <span className='font-bold'>{selectedConversation?.fullName}</span>
      </div>

      {/* CENTER - Scrollable Messages */}
      <div className='flex-1 overflow-y-auto px-4'>
        <Messages />
      </div>

      {/* BOTTOM - Input */}
      <MessageInput />
        </>
       )}
      
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
    const {authUser} = useAuthContext()
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullName}</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}