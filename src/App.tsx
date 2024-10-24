import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Footer from "./pages/Footer"
import SpinnerCarga from "./components/SpinnerCarga"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/nosotros" element={<About />} />
      </Routes>
      <SpinnerCarga/>
      <Footer />
    </>
  )
}

export default App