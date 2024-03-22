import { useState, createContext } from 'react'

export const workOrderContext = createContext()

export const WorkOrderProvider = ({ children }) => {
  const [workOrder, setWorkOrder] = useState([])
  const [newWorkOrder, setNewWorkOrder] = useState({
    cliente: {},
    vehiculo: {},
    servicios: [],
    descuento: 0,
    subtotal: 0,
    total: 0
  })

  return (
    <workOrderContext.Provider value={{
      workOrder,
      setWorkOrder,
      newWorkOrder,
      setNewWorkOrder
    }}
    >
      {children}
    </workOrderContext.Provider>
  )
}
