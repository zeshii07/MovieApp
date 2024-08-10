import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className='bg-slate-400 flex flex-row justify-between  text-xl md:text-2xl font-bold h-16 items-center shadow-md cursor-pointer'>

      <div className="name ml-6 text-blue-700 font-lobster">
        <h1>Whether Forecast</h1>
      </div>
      <div className='navItems '>
        <ul className="flex flex-row space-x-4 mr-7 text-purple-900 md:space-x-8 ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      </nav>
    </div>
  );
}
