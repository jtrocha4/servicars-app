import React, { useContext, useState } from 'react'
import IconUser from '../../public/icon/IconUser'
import IconBack from '../../public/icon/IconBack'
import ModalNewVehicle from '../components/ModalNewVehicle'
import { useNavigate } from 'react-router-dom'
import IconAdd from '../../public/icon/IconAdd'
import { workOrderContext } from '../contexts/workOrder'

const PageNewOrder = () => {
  const navigate = useNavigate()

  const [services, setServices] = useState([

  ])

  const { newWorkOrder, setNewWorkOrder } = useContext(workOrderContext)

  const [form, setForm] = useState({
    requerimiento: 'Reparacion',
    descripcion: '',
    cantidad: '',
    valor: '',
    total: '',
    descuento: 0
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleWorkOrder = (event) => {
    setNewWorkOrder({
      ...newWorkOrder,
      [event.target.name]: event.target.value
    })

    setNewWorkOrder(prevWorkOrder => {
      const newTotal = prevWorkOrder.subtotal - (prevWorkOrder.subtotal * (prevWorkOrder.descuento / 100))
      return {
        ...prevWorkOrder,
        total: newTotal
      }
    })
  }

  const handleAddService = (event) => {
    event.preventDefault()
    if (form.requerimiento.trim() && form.descripcion.trim() && form.cantidad.trim() && form.valor.trim()) {
      const totalService = parseFloat(form.cantidad) * parseFloat(form.valor)
      form.total = totalService
      setServices([...services, form])

      setNewWorkOrder(prevWorkOrder => {
        const newSubtotal = prevWorkOrder.subtotal + totalService
        const newTotal = newSubtotal - (newSubtotal * (prevWorkOrder.descuento / 100))

        return {
          ...prevWorkOrder,
          servicios: [...prevWorkOrder.servicios, form],
          subtotal: newSubtotal,
          total: newTotal
        }
      })

      // setNewWorkOrder(prevWorkOrder => {
      //   const newSubtotal = prevWorkOrder.subtotal + totalService
      //   const newTotal = newSubtotal - (newSubtotal * (prevWorkOrder.descuento / 100))

      //   return {
      //     ...prevWorkOrder,
      //     servicios: [...prevWorkOrder.servicios, form],
      //     subtotal: newSubtotal,
      //     descuento: prevWorkOrder.descuento,
      //     total: newTotal
      //   }
      // })

      setForm({
        requerimiento: 'Reparacion',
        descripcion: '',
        cantidad: '',
        valor: '',
        total: '',
        descuento: 0
      })
    } else {
      console.log('Por favor, complete todos los campos')
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <>
      <header>
        <button className='font-semibold hover:scale-105' onClick={handleBack}>
          <IconBack className='display: inline-block me-1 align-top' fill='#2E3549' width={25} />
          Atras
        </button>
      </header>
      <h1 className='text-2xl font-semibold text-center'>Page new orders</h1>
      <div className='my-4 grid grid-cols-2'>
        <section className='border-2 border-y-0 border-l-0 border-r-indigo-500'>
          <header className='mb-4'>
            <IconUser width={25} className='display: inline-block' />
            <h1 className='display: inline-block align-middle font-bold ms-1'>Nombre cliente</h1>
          </header>
          <form className='mb-4' action=''>
            <fieldset className='flex flex-row gap-5 mb-2'>
              <label>Requerimiento</label>
              <div>
                <input type='radio' name='requerimiento' id='reparacion' value='Reparacion' onChange={handleChange} defaultChecked />
                <label className='ms-1' htmlFor='reparacion'>Reparacion</label>
              </div>
              <div>
                <input type='radio' name='requerimiento' id='garantia' value='Garantia' onChange={handleChange} />
                <label className='ms-1' htmlFor='garantia'>Garantia</label>
              </div>
            </fieldset>

            <fieldset>
              <input className='w-11/12 h-10 me-2 mb-2 p-2 border-2 border-gray-300 rounded-lg' type='text' placeholder='Descripcion' name='descripcion' onChange={handleChange} value={form.descripcion} />
              <input className='w-64 h-10 me-4 p-2 border-2 border-gray-300 rounded-lg' type='number' min={1} placeholder='Cantidad' name='cantidad' onChange={handleChange} value={form.cantidad} />
              <input className='w-64 h-10 me-4 p-2 border-2 border-gray-300 rounded-lg' type='number' placeholder='Valor c/u' name='valor' onChange={handleChange} value={form.valor} />
              <button className='h-10 px-4 py-2 font-semibold rounded-md bg-[#75C5B1] text-white hover:scale-105 hover:bg-[#75c5b1bb]' title='Agregar' onClick={handleAddService}>
                <IconAdd classname='display: inline-block' width={28} stroke='#FFFFFF' />
              </button>
            </fieldset>
          </form>

          {/*
          TODO: Crear una columna de opciones para editar o eliminar servicio.
                Corregir el keyID del elemento Map.
          */}
          <div className='mb-8'>
            <span>Producto o Servicio</span>
            <div className='w-11/12 max-h-80 mt-2 border-2 rounded-lg border-collapse bg-slate-100 overflow-auto'>
              <table className='table-auto my-2 w-full'>
                <thead className='bg-slate-100'>
                  <tr>
                    <th className='font-semibold p-3 text-slate-900 text-center'>Producto o servicio</th>
                    <th className='font-semibold p-3 text-slate-900 text-center'>Cantidad</th>
                    <th className='font-semibold p-3 text-slate-900 text-center'>Valor c/u</th>
                    {/* <th className='font-semibold p-3 text-slate-900 text-center'>Descuento</th> */}
                    <th className='font-semibold p-3 text-slate-900 text-center'>Total</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {
                    services.map(element => (
                      <tr key={element.descripcion}>
                        <td className='p-3 border-b-2 text-slate-500 dark:text-slate-400'>{element.descripcion}</td>
                        <td className='p-3 border-b-2 text-slate-500 dark:text-slate-400'>
                          {/* <input className='w-20 border border-gray-300 rounded-lg' type='number' name='cantidad' id='cantidad' /> */}
                          {element.cantidad}
                        </td>
                        <td className='p-3 border-b-2 text-slate-500 dark:text-slate-400'>
                          {/* <label htmlFor='valor'>$</label>
                      <input className='w-24 ms-1 border border-gray-300 rounded-lg' type='number' name='valor' id='valor' /> */}
                          ${element.valor}
                        </td>
                        {/* <td className='p-3 border-b-2 text-slate-500 dark:text-slate-400'>100%</td> */}
                        <td className='p-3 border-b-2 text-slate-500 dark:text-slate-400'>${element.total}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div className='flex justify-between w-11/12'>
            <form action=''>
              <label className='display: block' htmlFor='descuento'>Descuento</label>
              <input className='w-14 h-8 me-2 p-1 border-2 border-gray-300 rounded-lg' type='number' name='descuento' min={0} max={100} onChange={handleWorkOrder} value={newWorkOrder.descuento} />
              <span>%</span>
            </form>
            <div>
              <h5>Subtotal</h5>
              <span>{newWorkOrder.subtotal}</span>
            </div>
            <div>
              <h5>Total</h5>
              <span>{newWorkOrder.total}</span>
            </div>
          </div>

        </section>
        <section>
          <div className='flex justify-end'>
            <ModalNewVehicle />
          </div>
        </section>
      </div>
      <footer className='flex justify-end gap-2 mt-4'>
        <button className='h-10 px-6 font-semibold rounded-md bg-gray-400 text-white hover:scale-105 hover:bg-gray-300' type='button'>
          Cancelar
        </button>
        <button className='h-10 px-6 font-semibold rounded-md bg-[#FF664C] text-white hover:scale-105 hover:bg-[#ff674ce9]' type='submit'>
          Confirmar orden
        </button>
      </footer>
    </>
  )
}

export default PageNewOrder
