import { useEffect, useState } from "react"

export default function ModalForm({ isOpen, onClose, mode, onSubmit, productoData }) {

    const [productoNombre, setProductoNombre] = useState('')
    const [productoDescripcion, setProductoDescripcion] = useState('')
    const [productoPrecio, setProductoPrecio] = useState('')
    const [productoStock, setProductoStock] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const productoData = { productoNombre, productoDescripcion, productoPrecio, productoStock }
            await onSubmit(productoData)
            onClose()
        } catch (err) {
            console.error("Error al agregar un producto: ", err)
        }
        onClose(e)
    }

    useEffect(() => {
        if ((mode === 'editar') && productoData) {
            setProductoNombre(productoData.productoNombre)
            setProductoDescripcion(productoData.productoDescripcion)
            setProductoPrecio(productoData.productoPrecio)
            setProductoStock(productoData.productoStock)
        } else {
            setProductoNombre('')
            setProductoDescripcion('')
            setProductoPrecio('')
            setProductoStock('')
        }
    }, [mode, productoData])

    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg py-4">{mode === 'editar' ? 'Modificar Producto' : 'Agregar un nuevo Producto'}</h3>
                    <form method="dialog" onSubmit={handleSubmit}>
                        <label className="mt-3 input input-bordered flex items-center gap-2"> Producto:
                            <input type="tmt-3 ext" placeholder="" className="grow" value={productoNombre} onChange={(e) => setProductoNombre(e.target.value)} />
                        </label>
                        <label className="mt-3 input input-bordered flex items-center gap-2"> Descripción:
                            <input type="tmt-3 ext" placeholder="" className="grow" value={productoDescripcion} onChange={(e) => setProductoDescripcion(e.target.value)} />
                        </label>
                        <label className="mt-3 input input-bordered flex items-center gap-2"> Precio:
                            <input type="nmt-3 umber" placeholder="" className="grow" value={productoPrecio} onChange={(e) => setProductoPrecio(e.target.value)} />
                        </label>
                        <label className="mt-3 input input-bordered flex items-center gap-2"> Stock:
                            <input type="number" placeholder="" className="grow" value={productoStock} onChange={(e) => setProductoStock(e.target.value)} />
                        </label>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                        <button className="mt-3 btn btn-success">{mode === 'editar' ? 'Guardar Cambios' : 'Agregar'}</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}