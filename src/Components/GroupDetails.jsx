import React from 'react';
import StudentList from './StudentList';
import Tabs from './Tabs';

const GroupDetails = ({ activeGroup }) => {
  if (!activeGroup) return null; // Hali group tanlanmagan bo'lsa hech narsa ko'rsatilmasin

  return (
    <div className="overflow-x-auto w-full p-5">
      <div className="flex justify-between items-center mb-5">
        <span className='text-[#004466] text-[32px] font-semibold'>{activeGroup.name}</span>
        <button className="btn btn-outline shadow-none border-none bg-[#e6e6e65f] text-[#f56c6c]">00:00:00</button>
      </div>

      <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-5">
        <div className="flex flex-col shadow-inner rounded border border-[#e7e7e7] p-3">
          <span className='text-[#004466] font-semibold'>Yo'nalish</span>
          <span className='text-[#2cc5e4] font-semibold'>{activeGroup.level}</span>
        </div>
        <div className="flex flex-col shadow-inner rounded border border-[#e7e7e7] p-3">
          <span className='text-[#004466] font-semibold'>Darslar soni</span>
          <span className='text-[#2cc5e4] font-semibold'>{activeGroup.lessonCount}</span>
        </div>
        <div className="flex flex-col shadow-inner rounded border border-[#e7e7e7] p-3">
          <span className='text-[#004466] font-semibold'>Dars vaqti</span>
          <span className='text-[#2cc5e4] font-semibold'>{activeGroup.time}</span>
        </div>
        <div className="flex flex-col shadow-inner rounded border border-[#e7e7e7] p-3">
          <span className='text-[#004466] font-semibold'>Dars kunlari</span>
          <span className='text-[#2cc5e4] font-semibold'>{activeGroup.lessonDay}</span>
        </div>
        <div className="flex flex-col shadow-inner rounded border border-[#e7e7e7] p-3">
          <span className='text-[#004466] font-semibold'>Dars honasi</span>
          <span className='text-[#2cc5e4] font-semibold'>{activeGroup.room}</span>
        </div>
      </div>

      <Tabs />

      {/* StudentList ga activeGroup ni props orqali yuboramiz */}
      <StudentList group={activeGroup} />
    </div>
  );
};

export default GroupDetails;
