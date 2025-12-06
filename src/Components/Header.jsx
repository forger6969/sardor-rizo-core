import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { LogOut } from 'lucide-react';

const Header = ({ user, setUser, lastName }) => {
  const [language, setLanguage] = useState("en"); // select uchun state

  const handleLogout = () => {
    localStorage.removeItem("teacher");
    setUser(null); // App.jsx-da user null bo‘lsa login sahifasi chiqadi
  }

  return (
    <header className='header h-[60px] bg-[#004466] fixed top-0 left-0 w-full flex items-center z-50'>
      <div className="container max-w-[1352px] mx-auto flex justify-between items-center px-5 w-full">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>

        <div className='flex gap-3 items-center'>
          <Link to={"/"} className='border-0 border-r border-solid border-white pr-2 flex items-center'>
<span className='text-white font-bold'>
<span className='text-white font-bold'>
  {user?.name ? `${user.name} ${user.lastName || ""}` : "Guest"}
</span>
</span>
          </Link>

          <div className="selectoption border-0 border-r bg-transparent border-solid border-white pr-3 w-[100px]">
            <select
              className="select bg-transparent outline-none select-ghost text-white"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option className='bg-[#004466]' value="en">EN</option>
              <option className='bg-[#004466]' value="ru">RU</option>
              <option className='bg-[#004466]' value="uz">UZ</option>
            </select>
          </div>

          <button className='text-white' onClick={handleLogout}>
            <LogOut />
          </button>
        </div>
      </div>
    </header>
  )
}


export default Header;
