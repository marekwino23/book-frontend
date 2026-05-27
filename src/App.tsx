import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import AllBooks from './components/AllBooks'
import Form from './components/Form'
import Home from './components/Home'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<Form />} />
        <Route path="/books" element={<AllBooks />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
