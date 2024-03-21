import React from 'react'

const IconOrder = ({ width = 40, className }) => {
  return (
    <>
      <svg className={className} width={`${width}px`} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' id='icon-order'>
        <rect x='5' y='4' width='14' height='17' rx='2' stroke='#33363F' strokeWidth='2' />
        <path d='M9 9H15' stroke='#33363F' strokeWidth='2' strokeLinecap='round' />
        <path d='M9 13H15' stroke='#33363F' strokeWidth='2' strokeLinecap='round' />
        <path d='M9 17H13' stroke='#33363F' strokeWidth='2' strokeLinecap='round' />
      </svg>
    </>
  )
}

export default IconOrder
