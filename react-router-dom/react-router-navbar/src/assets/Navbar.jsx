import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='w-full h-[10vh] bg-lime-500 flex items-center justify-center text-2xl font-semibold text-white'>
        <ul className='flex gap-x-12'>
            <li><NavLink
  to="/"
  className={({ isActive}) =>
  isActive ? "active text-red-600" : "pending text-white"
  }
>
  Home
</NavLink></li>
<li><NavLink
  to="/About-us"
  className={({ isActive}) =>
  isActive ? "active text-red-600" : "pending text-white"
  }
>
  About-Us
</NavLink></li>
<li><NavLink
  to="/Blog"
  className={({ isActive}) =>
  isActive ? "active text-red-600" : "pending text-white"
  }
>
  Blog
</NavLink></li>
<li><NavLink
  to="/Success"
  className={({ isActive}) =>
  isActive ? "active text-red-600" : "pending text-white"
  }
>
  Success
</NavLink></li>
<li><NavLink
  to="/Contact"
  className={({ isActive}) =>
  isActive ? "active text-red-600" : "pending text-white"
  }
>
  Contact
</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar