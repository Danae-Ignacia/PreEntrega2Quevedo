import { Link } from "react-router-dom";
import logo from "../../assets/logoCartoonCraze.png";
import "../navigation/NavBar.css"

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
             <div className="container-fluid">
             <Link to="/">
             <img className="navbar-brand w-25" src={logo} alt="Logo" />
             </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li>
            <button>
                <Link to={'/'}>Inicio</Link>
            </button>
            </li>
            <li>
            <button>
                <Link to={'/categoryContainer'}>Todos los Productos</Link>
            </button>
            </li>
            <li>
            <button>
            <Link to={'/categoryContainer'}>Nuevo</Link>
            </button>
            </li>
            </ul>
            </div>


            </div>
        </nav>
    )
}