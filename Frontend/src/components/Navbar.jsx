import ProfileIcon from "../assets/profile.ico"

export default function Navbar({ onOpen }) {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                </div>
                <div className="navbar-center">
                    <div className="flex-1">
                        <a className="text-xl">Challenge TDevs</a>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-info" onClick={onOpen}>Agregar Producto</a>
                </div>
            </div>
        </>
    )
}