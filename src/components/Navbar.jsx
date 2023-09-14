import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import '../assets/styles/Navbar.css';
import logo from '../assets/images/G L3.png';
import name from '../assets/images/G2.png';

const MenuItem = ({ itemName, activeItem, onItemClick }) => {
  const isActive = itemName === activeItem;

  return (
    <div
      className={`menu-item ${isActive ? 'active' : ''}`}
      onClick={() => onItemClick(itemName)}
    >
      {itemName}
    </div>
  );
};


const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      const topOffset = rect.top + window.scrollY;
  
      // Calculate the adjusted top position including the margin
      const adjustedTop = topOffset - 100;
  
      window.scrollTo({ top: adjustedTop, behavior: 'smooth' });
    }
  };

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="navbar">
      <div className="nav0">
        <Link to="main" smooth={true} duration={500}
        onClick={() => scrollToSection("main")}>
          <img src={logo} alt="logo" className='logo' />
        </Link>

        <Link to="main" smooth={true} duration={500}
        onClick={() => scrollToSection("main")}>
          <img src={name} alt="Name logo" className='logo2'/>
        </Link>
      </div>

      <div className="nav1">
      <Link to="about" smooth={true} duration={500}
        onClick={() => scrollToSection('#about')}
        className="nav"
        >
        <MenuItem
        itemName="About"
        activeItem={activeItem}
        onItemClick={handleItemClick}
        />
      </Link>
      <Link to="service" smooth={true} duration={500}
        onClick={() => scrollToSection('#service')}
        className="nav">
        <MenuItem
        itemName="Services"
        activeItem={activeItem}
        onItemClick={handleItemClick}
        />
      </Link>
      <Link to="project" smooth={true} duration={500}
        onClick={() => scrollToSection('#project')}
        className="nav">
        <MenuItem
        itemName="Projects"
        activeItem={activeItem}
        onItemClick={handleItemClick}
        />
      </Link>
      <Link to="blog" smooth={true} duration={500}
        onClick={() => scrollToSection('#blog')} 
        className="nav">
        <MenuItem
        itemName="Blogs"
        activeItem={activeItem}
        onItemClick={handleItemClick}
        />
      </Link>
      <Link to="contact" smooth={true} duration={500}
        onClick={() => scrollToSection('#contact')}  
        className="nav">
        <MenuItem
        itemName="Contact"
        activeItem={activeItem}
        onItemClick={handleItemClick}
        />
      </Link>
      {/* <Link to="/contact" 
        className="nav">
        <MenuItem
        itemName="Let's Chat"
        activeItem={activeItem}
        onItemClick={handleItemClick}
        />
      </Link> */}
      </div>

    </div>
  )
}

export default Navbar