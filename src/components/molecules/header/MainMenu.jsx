import { Link } from "react-router-dom"

const MainMenu = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-end text-gray-100">
        <li className="flex item-center">
          <Link className="menu-item" to="/">
            Inicio
          </Link>
        </li>
        <li className="flex item-center">
          <Link className="menu-item" to="/products">
            Productos
          </Link>
        </li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export default MainMenu