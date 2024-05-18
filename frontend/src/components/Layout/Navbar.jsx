import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      {navItems &&
        navItems.map((i, index) => (
          <div className="mx-2 relative group" key={index}>
            <Link
              to={i.url}
              className="text-black 800px:text-[#fff] flex items-center py-2 px-4 rounded-full transition-all duration-300"
            >
              {i.title}
            </Link>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black 800px:bg-white rounded-full opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        ))}
    </div>
  )
}

export default Navbar;
