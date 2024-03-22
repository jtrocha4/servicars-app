import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WorkOrderProvider } from './contexts/workOrder.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkOrderProvider>
      <App />
    </WorkOrderProvider>
  </React.StrictMode>
)
