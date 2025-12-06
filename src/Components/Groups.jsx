import React from 'react';
import { FaUserGroup } from "react-icons/fa6";

const Groups = ({ groups, activeGroupId, setActiveGroupId }) => {
  return (
<aside className='absolute top-[60px] bottom-0 left-0  flex flex-col gap-4 overflow-y-auto border-r border-[#E6E6E6] teacher-sidebar py-2'>
  <div className="flex flex-col gap-4">
    {groups.map(group => (
      <div
        key={group.id}
        className={`flex items-center flex-col gap-1 p-2 cursor-pointer border-l-[5px] transition-all duration-300
          ${activeGroupId === group.id 
            ? 'border-[#2cc5e4] bg-[#1fc7e918] text-[#2cc5e4] font-bold'
            : 'border-transparent'}`}
        onClick={() => setActiveGroupId(group.id)}
      >
        <FaUserGroup />
        <span className="font-medium text-sm text-center">{group.name}</span>
      </div>
    ))}
  </div>
</aside>

  );
};

export default Groups;
