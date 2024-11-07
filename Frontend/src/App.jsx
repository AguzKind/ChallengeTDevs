import Navbar from "./components/Navbar"
import Tabla from "./components/Tabla"
import ModalForm from "./components/ModalForm"
import axios from "axios"
import { useState } from "react"

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setModalMode] = useState('agregar')
  const [searchTerm, setSearchTerm] = useState('')
  const [productoData, setProductoData] = useState(null)

  const handleOpen = (mode, producto) => {
    setIsOpen(true)
    setModalMode(mode)
    setProductoData(producto)
  }

  const handleSubmit = async (newProductoData) => {
    if (modalMode === 'agregar') {
      try {
        const response = await axios.post('https://localhost:7233/api/productos', newProductoData)
        console.log("Producto Agregado: ", response.data)
      }
      catch (err) {
        console.error("Error al agregar un producto: ", err)
      }
      console.log("modal mode agregar")

    } else {
      try {
        const response = await axios.put(`https://localhost:7233/api/productos/${productoData.productoId}`, newProductoData)
        console.log("Producto modificado: ", response.data)
      }
      catch (err) {
        console.error("Error al modificar el producto: ", err)
      }
    }
  }


  return (
    <>
      <Navbar onOpen={() => handleOpen('agregar')} onSearch={setSearchTerm} />
      <Tabla handleOpen={handleOpen} searchTerm={searchTerm} />
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit} mode={modalMode} productoData={productoData} />    </>
  )
}

export default App
