import React,{useContext,useRef,useState} from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png';
import { ShopContext } from '../../Context/ShopContext';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
// import { MdOutlineArrowDropDownCircle } from "react-icons/fa";
import nav_dropdown from '../Assets/nav_dropdown.png'



const Navbar = () => {

    const [menu,setMenu] = useState("shop")
   const {getTotalCartItems}=useContext(ShopContext);
   const menuRef = useRef();
   const dropdown_toggle =(e) =>{
  menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open')

   }


  return (


  
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" className="img_logo" />
            <p><span>BNE</span>-commerce</p>
        </div>
       <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
        <li onClick={() => {setMenu ("shop") }} > <Link to='/' style={{ textDecoration :'none' }} >shop</Link> {menu=== "shop" ? <hr/> :<></> } </li>
        <li onClick={() => {setMenu ("mens") }} ><Link to='/mens' style={{ textDecoration :'none' }}>men</Link> {menu=== "mens" ? <hr/> :<></> }</li>
        <li onClick={() => {setMenu ("womens") }} ><Link to='/womens' style={{ textDecoration :'none' }}>womens</Link> {menu=== "womens" ? <hr/> :<></> } </li>
        <li onClick={() => {setMenu ("kids") }} ><Link style={{ textDecoration :'none' }} to='/kids'>kids</Link>{menu=== "kids" ? <hr/> :<></> }</li>
         </ul>
  
         <div className="nav-login-cart">
          <Link to="/login">  <button>login</button></Link>
          <Link to='/cart'> <img src={cart_icon} alt="" className="login-cart-img" />  </Link>
            <div className="nav-login-count">{getTotalCartItems()}</div>
         </div>
   
    </div>
  );
};

export default Navbar;