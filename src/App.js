import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Header, Footer } from './components'
import { Router } from './router/Router'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
