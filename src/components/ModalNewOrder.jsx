import React, { useContext, useState } from 'react'
import IconUser from '../../public/icon/IconUser'
import IconFingerprint from '../../public/icon/IconFingerprint'
import IconPhone from '../../public/icon/IconPhone'
import IconEmail from '../../public/icon/IconEmail'
import IconCompany from '../../public/icon/IconCompany'
import { useNavigate } from 'react-router-dom'
import IconAddress from '../../public/icon/IconAddress'
import { workOrderContext } from '../contexts/workOrder'

const ModalNewOrder = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const navigate = useNavigate()

  const { setNewWorkOrder } = useContext(workOrderContext)

  const [form, setForm] = useState({
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    id: '',
    telefono: '',
    correo: '',
    direccion: '',
    empresa: '',
    nit: ''
  })

  const handleNextStep = () => {
    // setCurrentStep(currentStep + 1)
    if (form.nombre.trim() && form.primerApellido.trim() && form.segundoApellido.trim() && form.id.trim() && form.telefono.trim() && form.correo.trim() && form.direccion.trim()) {
      if (form.empresa === '') {
        form.empresa = 'n/a'
        form.nit = 'n/a'
      }
      setNewWorkOrder(prevWorkOrder => {
        return {
          ...prevWorkOrder,
          cliente: {
            nombre: form.nombre,
            primerApellido: form.primerApellido,
            segundoApellido: form.segundoApellido,
            id: form.id,
            telefono: form.telefono,
            correo: form.correo,
            direccion: form.direccion,
            empresa: form.empresa,
            nitEmpresa: form.nit
          }
        }
      })
      navigate('/newOrder')
    }
  }

  const handleCloseModal = () => {
    setIsOpen(!isOpen)
    setForm({
      nombre: '',
      primerApellido: '',
      segundoApellido: '',
      id: '',
      telefono: '',
      correo: '',
      direccion: '',
      empresa: '',
      nit: ''
    })
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <button className='h-10 px-6 font-semibold rounded-md bg-[#FF664C] text-white hover:scale-105 hover:bg-[#ff674ce9]' type='submit' onClick={() => setIsOpen(!isOpen)}>
        Nueva orden
      </button>
      {
            isOpen && (
              <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
                <div className='bg-white p-5 rounded flex flex-col justify-center gap-5'>
                  <header>
                    <div className='flex justify-end'>
                      <button title='Cerrar' onClick={handleCloseModal} className='text-gray-500 font-semibold'>X</button>
                    </div>
                    <h1 className='text-2xl font-semibold'>Crear orden</h1>
                  </header>
                  <form action=''>
                    <fieldset className='mb-4'>
                      <IconUser width={25} className='display: inline-block me-2' stroke='#6b7280' />
                      <input className='w-64 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' name='nombre' placeholder='Nombres' onChange={handleChange} value={form.nombre} required />
                      <input className='w-64 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' name='primerApellido' placeholder='Primer Apellido' onChange={handleChange} value={form.primerApellido} required />
                      <input className='w-64 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' name='segundoApellido' placeholder='Segundo Apellido' onChange={handleChange} value={form.segundoApellido} required />
                    </fieldset>
                    <fieldset className='mb-4'>
                      <IconFingerprint width={25} className='display: inline-block me-2' fill='#6b7280' />
                      <input className='w-64 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' name='id' placeholder='Identificacion' onChange={handleChange} form={form.id} required />
                    </fieldset>
                    <fieldset className='mb-4'>
                      <IconPhone width={25} className='display: inline-block me-2' stroke='#6b7280' />
                      <input className='w-64 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' name='telefono' placeholder='Telefono' onChange={handleChange} form={form.telefono} required />
                      <IconEmail width={25} className='display: inline-block me-2' stroke='#6b7280' />
                      <input className='w-56 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' name='correo' placeholder='Correo electronico' onChange={handleChange} form={form.correo} required />
                      <IconAddress width={25} className='display: inline-block me-2' fill='#6b7280' />
                      <input className='w-56 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' name='direccion' placeholder='Direccion' onChange={handleChange} form={form.direccion} required />
                    </fieldset>
                    <fieldset className='mb-4'>
                      <IconCompany width={25} className='display: inline-block me-2' fill='#6b7280' />
                      <input className='w-64 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' name='empresa' placeholder='Empresa' onChange={handleChange} value={form.empresa} required />
                      <input className='w-64 h-10 me-2 p-2 border-2 border-gray-300 rounded-lg' type='text' name='nit' placeholder='NIT' onChange={handleChange} value={form.nit} required />
                    </fieldset>
                  </form>
                  <footer className='flex justify-end gap-2'>
                    <button className='h-10 px-6 font-semibold rounded-md bg-gray-400 text-white hover:scale-105 hover:bg-gray-300' type='button' onClick={handleCloseModal}>
                      Cancelar
                    </button>
                    <button className='h-10 px-6 font-semibold rounded-md bg-blue-600 text-white hover:scale-105 hover:bg-blue-500' type='button' onClick={handleNextStep}>
                      Siguiente
                    </button>
                  </footer>
                </div>
              </div>
            )
          }
    </>
  )
}

export default ModalNewOrder
