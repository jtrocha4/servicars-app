import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageOrders from './pages/PageOrders'
import PageNewOrder from './pages/PageNewOrder'

function App () {
  return (
    <div className='App p-2 grid grid-cols-7 gap-2'>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <main className='col-span-7 xl:col-span-6 shadow-md bg-white rounded-lg'>
          <section className='m-4'>
            <Routes>
              <Route path='/' element={<PageOrders />} />
              <Route path='/newOrder' element={<PageNewOrder />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
