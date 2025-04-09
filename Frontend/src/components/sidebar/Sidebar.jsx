import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='flex flex-col h-full border-r border-slate-500 p-4'>
     <div className='w-full'> <SearchInput /></div>
      <div className='divider px-3'></div>

      {/* Scrollable area */}
      <div className='flex-1 overflow-y-auto'>
        <Conversations />
      </div>

      <LogoutButton />
    </div>
  )
}

export default Sidebar
