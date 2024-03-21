import React from 'react'
import IconCarRepair from '../../public/icon/IconCarRepair'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar col-span-7 shadow-md bg-white rounded-lg'>
      <div className='ms-3 my-3 w-auto flex flex-row justify-between'>
        <Link className='navbar-brand font-semibold text-xl' to='/'>
          <IconCarRepair width={35} fill='#FF664C' className='display: inline-block' />
          <span className='align-middle ms-2'>Servicar</span>
        </Link>
        <ul className='xl:hidden me-4 my-2 flex gap-4'>
          <li className=''>
            <Link className='font-medium' to='/'>Ordenes</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
