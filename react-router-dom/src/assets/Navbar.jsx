import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='h-[10vh] w-full bg-lime-500 flex items-center justify-center text-2xl text-white'>
      <ul className='flex gap-x-14'>

        <li>
        <NavLink
  to={"/"}
  className={({ isActive}) =>
    isActive ? "active text-white" : "pending text-black"
  }
>
Home
</NavLink></li>
        <li>
        <NavLink
  to={"/About-us"}
  className={({ isActive}) =>
    isActive ? "active text-white" : "pending text-black"
  }
>
About-us
</NavLink></li>
        <li>
        <NavLink
  to={"/Blog"}
  className={({ isActive}) =>
    isActive ? "active text-white" : "pending text-black"
  }
>
Blog
</NavLink>
        </li>
        <li>
        <NavLink
  to={"/Success"}
  className={({ isActive}) =>
    isActive ? "active text-white" : "pending text-black"
  }
>
Success
</NavLink>
        </li>
        <li>
        <NavLink
  to={"/Contact"}
  className={({ isActive}) =>
     isActive ? "active text-white" : "pending text-black"
  }
>
Contact
</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;