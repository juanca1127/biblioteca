
import './App.css'
import Card from './card'
import Detalle from './detalle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function NotFound() {
  return <h1>404 - Not Found</h1>;
}
function App() {


  return (
    <>
   <nav style={{
    background:'#f8863c',
    color:'white'
   }}>
  <div className="container-fluid p-4">
    <h1 className=''>Biblioteca Virtual de Lloró</h1>

    <p className="mt-2">Explora las creencias, costumbres y tradiciones del pueblo lloroseño</p>
   
  </div>
</nav>



<Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/detalles/:title" element={<Detalle/>} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>

 
    </>
  )
}

export default App
