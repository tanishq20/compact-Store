import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Header, Footer } from './components'
import { Router } from './router/Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
