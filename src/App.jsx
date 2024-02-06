
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Contact from './pages/Contact'
import Catalouge from './pages/Catalouge'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/catalogue' element={<Catalouge />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
