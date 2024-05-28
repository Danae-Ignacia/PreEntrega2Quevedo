import { Link } from "react-router-dom";
import logo from "../../assets/logo-cartoon-craze-red.png";
import "../navigation/NavBar.css"

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
             <div className="container">
             <Link to="/">
             <img className="navbar-brand w-25" src={logo} alt="Logo" />
             </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <a className="nav-link">
                <Link className="nav-a" to={'/'}>Inicio</Link>
            </a>
            </li>
          <li className="nav-item">
          <a className="nav-link">
          <Link className="nav-a" to={'/categoryContainer'}>Todos los Productos</Link>
            </a>
            </li>
          <li className="nav-item">
            <a className="nav-link">
            <Link className="nav-a" to={'/categoryContainer'}>Nuevo</Link>
            </a>
            </li>
            </ul>
            <span>🔍</span>
            </div>


            </div>
        </nav>
    )
}