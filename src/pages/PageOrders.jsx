import React from 'react'
import ModalNewOrder from '../components/ModalNewOrder'

const PageOrders = () => {
  return (
    <>
      <h1 className='text-2xl font-semibold text-center'>Page orders</h1>
      <section className='my-4 flex justify-end'>
        <ModalNewOrder />
      </section>
    </>
  )
}

export default PageOrders
