import React from 'react'

const IconAdd = ({ width = 40, stroke = '#000000', classname }) => {
  return (
    <>
      <svg className={classname} width={`${width}px`} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <circle cx='12' cy='12' r='10' stroke={stroke} strokeWidth='1.5' /> <path d='M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15' stroke={stroke} strokeWidth='1.5' strokeLinecap='round' /> </g></svg>
    </>
  )
}

export default IconAdd
