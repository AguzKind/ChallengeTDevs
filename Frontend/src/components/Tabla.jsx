import axios from "axios"
import { useState, useEffect } from "react"

export default function Tabla({ handleOpen }) {

    /*
    const productosPrueba = [{
        productoId: 1,
        nombreProducto: "Coca-Cola",
        descripcionProducto: "Bebida de cola marca Coca-Cola",
        precioProducto: "50",
        stockProducto: "10"
    },
    {
        productoId: 2,
        nombreProducto: "Pepsi",
        descripcionProducto: "Bebida de cola marca Pepsi",
        precioProducto: "20",
        stockProducto: "90"
    },
    {
        productoId: 3,
        nombreProducto: "Manaos",
        descripcionProducto: "Bebida de cola marca Manaos",
        precioProducto: "15",
        stockProducto: "110"
    }]
        */

    const [tableData, setTableData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://localhost:7233/api/productos/")
                setTableData(response.data)
            } catch (err) {
                setError(err.message)
            }
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Seguro que queres eliminar el registro seleccionado?")
        if (confirmDelete) {
            try {
                await axios.delete(`https://localhost:7233/api/productos/${id}`)
                setTableData((prevData => prevData.filter(producto => producto.productoId !== id)))
            } catch (err) {
                setError(err.message)
            }
        }
    }

    return (
        <>
            {error && <div className="alert alert-error">{error}</div>}
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody className="hover">
                        {
                            tableData.map((producto) => (
                                <tr key={producto.productoId}>
                                    <th>{producto.productoId}</th>
                                    <td>{producto.productoNombre}</td>
                                    <td>{producto.productoDescripcion}</td>
                                    <td>{producto.productoPrecio}</td>
                                    <td>{producto.productoStock}</td>
                                    <td>
                                        <button className="btn btn-secondary" onClick={() => handleOpen('editar', producto)}>Modificar</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-error" onClick={() => handleDelete(producto.productoId)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}