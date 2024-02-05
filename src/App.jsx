
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Contact from './pages/Contact'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/categories' element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
