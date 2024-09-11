
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      
      <Link to="/">
        <img  className='logoOdora' src={"/public/img/Odora.png"} alt="Logo Odora" />
      </Link>
       
        <nav>
            <ul>
                <li>
                  <NavLink to="/"> Inicio </NavLink>
                
                </li>

                <li>
                  <NavLink to="/categoria/femeninas"> Femeninas </NavLink>
                  
                </li>

                <li>
                 <NavLink to="/categoria/masculinas"> Masculinas </NavLink> 
                </li>

                <li>
                 <NavLink to="/categoria/infantiles"> Infantiles </NavLink> 
                </li>
            </ul>
        </nav>

        <CartWidget/>
        

    </header>
  )
}

export default NavBar