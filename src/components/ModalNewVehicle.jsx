import React, { useState } from 'react'
import IconCar from '../../public/icon/IconCar'
import IconGas from '../../public/icon/IconGas'
import IconSpeedometer from '../../public/icon/IconSpeedometer'
import IconMotor from '../../public/icon/IconMotor'
import IconLicensePlate from '../../public/icon/IconLicensePlate'

const ModalNewVehicle = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className='h-10 px-6 font-semibold rounded-md bg-blue-500 text-white hover:scale-105 hover:bg-blue-400' type='submit' onClick={() => setIsOpen(!isOpen)}>
        Agregar vehiculo
      </button>
      {
                isOpen && (
                  <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
                    <div className='bg-white p-5 rounded flex flex-col justify-center gap-5'>
                      <header>
                        <div className='flex justify-end'>
                          <button title='Cerrar' onClick={handleCloseModal} className='text-gray-500 font-semibold'>X</button>
                        </div>
                        <h1 className='text-2xl font-semibold'>Agregar Vehiculo</h1>
                      </header>
                      <form action=''>
                        <fieldset className='mb-4'>
                          <IconCar width={25} className='display: inline-block me-2' stroke='#6b7280' />
                          <input className='w-52 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' placeholder='Marca' required />
                          <input className='w-52 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' placeholder='Modelo' required />
                          <input className='w-52 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='number' placeholder='Año' required />
                        </fieldset>
                        <fieldset className='mb-4'>
                          <IconGas width={25} className='display: inline-block me-2' stroke='#6b7280' />
                          <select className='w-52 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' name='combustible' id=''>
                            <option className='text-gray-300' value='none'>Tipo de combustible</option>
                            <option value='gasolina'>Gasolina</option>
                            <option value='diesel'>Diesel</option>
                          </select>
                          <IconSpeedometer width={30} className='display: inline-block me-1' fill='#6b7280' />
                          <input className='w-44 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='number' placeholder='Kilometraje' required />
                          <IconMotor width={25} className='display: inline-block me-1' fill='#6b7280' />
                          <input className='w-44 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='number' placeholder='Motor' required />
                        </fieldset>
                        <fieldset>
                          <IconLicensePlate width={30} className='display: inline-block me-1' fill='#6b7280' />
                          <input className='w-52 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' placeholder='Matricula' required />
                        </fieldset>
                      </form>
                      <footer className='flex justify-end gap-2'>
                        <button className='h-10 px-6 font-semibold rounded-md bg-gray-400 text-white hover:scale-105 hover:bg-gray-300' type='button' onClick={handleCloseModal}>
                          Cancelar
                        </button>
                        <button className='h-10 px-6 font-semibold rounded-md bg-blue-600 text-white hover:scale-105 hover:bg-blue-500' type='button'>
                          Agregar
                        </button>
                      </footer>
                    </div>
                  </div>
                )
              }
    </>
  )
}

export default ModalNewVehicle
