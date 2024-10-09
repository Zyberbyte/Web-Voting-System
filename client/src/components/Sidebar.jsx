import React, { useState } from 'react';
import {Logo} from "../assets/img/image"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <>

      <button 
        className="md:hidden p-4 focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
     
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

   
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
    
        <button 
          className="md:hidden mb-6 focus:outline-none" 
          onClick={() => setIsOpen(false)}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

  
        <div className="flex justify-around items-center mb-12">
          <img className='w-[3rem] h-[3rem] rounded-full' src={Logo}/>
          <p>SSLG Moderator</p>
        </div>

     
        <nav className="space-y-4">
          <a href="/dashboard" className="block py-2 px-3 bg-blue-600 rounded-md">
            Dashboard
          </a>
          <a href="/candidates" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Candidates
          </a>
          <a href="/position" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Position
          </a>
          <a href="/ballot" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Ballot
          </a>
          <a href="/announcements" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Announcements
          </a>

       
          <div className="text-gray-400 text-sm mt-6">Manage Reports</div>
          <a href="/ballot-report" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Ballot Report
          </a>
          <a href="/feedbacks" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Feedbacks
          </a>

       
          <div className="text-gray-400 text-sm mt-6">Manage Users</div>
          <a href="/students" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Students
          </a>
          <a href="/staff" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Staff
          </a>
          <a href="/accounts" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Accounts
          </a>
\
          <div className="text-gray-400 text-sm mt-6">Manage Account</div>
          <a href="/profile" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Profile
          </a>
          <a href="/logout" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
            Logout
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
