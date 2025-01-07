import React, { ReactElement } from 'react'

function SidebarItem({icon,text}:{
    text:string;
    icon:ReactElement
    
}) {
  return (
    <div className='flex text-gray-700 cursor-pointer hover:bg-gray-200 roundedm max-w-48 duration-1000'>
        <div className='p-3'>{icon}</div>
        <div className="p-3">{text}</div>

    </div>
  )
}

export default SidebarItem