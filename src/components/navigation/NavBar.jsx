import { Link } from "react-router-dom";
import logo from "../../assets/logoCartoonCraze.png";

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container-fluid">
             <img className="navbar-brand w-25" src={logo} alt="Logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
            <button>
                <Link to={'/'}>Inicio</Link>
            </button>
            <button>
                <Link to={'/categoryContainer'}>Todos los Productos</Link>
            </button>
            <button>
            <Link to={'/categoryContainer'}>Nuevo</Link>
            </button>
            </div>
            </div>


            </div>
        </nav>
    )
}