import React,{useState} from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menu,setMenu] = useState("shop")
  return (


  
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" className="img_logo" />
            <p><span>BNE</span>-commerce</p>
        </div>
       
        <ul className="nav-menu">
        <li onClick={() => {setMenu ("shop") }} > <Link to='/' style={{ textDecoration :'none' }} >shop</Link> {menu=== "shop" ? <hr/> :<></> } </li>
        <li onClick={() => {setMenu ("mens") }} ><Link to='/mens' style={{ textDecoration :'none' }}>men</Link> {menu=== "mens" ? <hr/> :<></> }</li>
        <li onClick={() => {setMenu ("womens") }} ><Link to='/womens' style={{ textDecoration :'none' }}>womens</Link> {menu=== "womens" ? <hr/> :<></> } </li>
        <li onClick={() => {setMenu ("kids") }} ><Link style={{ textDecoration :'none' }} to='/kids'>kids</Link>{menu=== "kids" ? <hr/> :<></> }</li>
         </ul>
  
         <div className="nav-login-cart">
          <Link to="/login">  <button>login</button></Link>
          <Link to='/cart'> <img src={cart_icon} alt="" className="login-cart-img" />  </Link>
            <div className="nav-login-count">0</div>
         </div>
   
    </div>
  );
};

export default Navbar;