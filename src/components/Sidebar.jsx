import React from 'react'
import IconOrder from '../../public/icon/IconOrder'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='hidden col-span-1 xl:block shadow-md bg-white rounded-lg'>
      <div className='my-4'>
        <ul className='flex flex-col gap-2'>
          <li className='nav-item'>
            <Link className='display: block' to='/'>
              <IconOrder width={30} className='display: inline-block' />
              <span className='align-middle font-semibold'>Ordenes</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
