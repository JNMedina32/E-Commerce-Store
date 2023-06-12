import { useState } from "react";
import Logo from '../assets/logo2.jpg';
import { FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import CallAPI from "./CallAPI";



export default function Banner(){

  const [userSearch, setUserSearch] = useState('');
  const [seacrhAPI, setSearchAPI] = useState('');

  const handleInput = (e) => {
    setUserSearch(e.target.value);
  }

  const handleSearch = () => {
    setSearchAPI(userSearch);
  }



  return (
    <nav className="navbar">
      <div className="container-fluid banner">
        {/* <Link> */}
          <img src={Logo} 
            width="100" 
            height="100" 
            className="d-inline-block align-text-top logo" />
          <h1 className="col storeName">Phoenix Shopping</h1>
        {/* </Link> */}
        <div className="col input-group input-group-sm">
          <input 
            type="text" 
            className="form-control userSearch"
            onChange={handleInput}
            placeholder="search products"
          />
          <span 
            className="btn search input-group-text"
            onClick={handleSearch}
          ><FaSearch /></span>
        </div>
        <button className="btn btn-lg cart"><FaShoppingCart /></button>
        <button className="btn btn-lg user"><FaUserAlt /></button>
      </div>
    </nav>
  )
}