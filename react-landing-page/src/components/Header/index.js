import { useState } from 'react';
import { Link } from 'react-router-dom';

import LinkHeader from '../LinkHeader';

import { FaAlignJustify } from 'react-icons/fa';
import './style.css';
// import './header.css';



function Header() {
  const [status, setStatus] = useState(false);



  function btnMenu(newStatus) {

    setStatus(!newStatus);

    let divOptions = document.getElementById("div-options");
    
    !newStatus
    ? divOptions.style.display = 'block' 
    : divOptions.style.display = 'none'
  }


  
  return (
    <header>
      <div className="container">

        <div className="div-header">
          <Link to="/" className="logo">I'mJr</Link>
          <button onClick={() => btnMenu(status)}><FaAlignJustify/></button>
        </div>

        <div id="div-options" className="div-options">
          <LinkHeader/>
        </div>

      </div>
    </header>
  )
}

export default Header;