import { useState, useEffect } from 'react';
import Button from "./Button";
import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link"

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };


  return (
    <div className={`${
      isSticky ? 'fixed top-0 left-0 w-full' : ''
    } flex justify-between items-center z-50 bg-gray-100 border-2 md:px-[5rem] px-[1rem] py-[1rem] backdrop-blur-md bg-opacity-50`}>
      <Link to="/" relative='path'>
        <img src="src/images/MASTERLOGO (Black)-1 1.png" alt="Finham Logo" />
      </Link>
      <div>
        <ul className={`flex md:flex md:flex-row flex-col absolute md:relative justify-center items-center gap-[3rem] mt-[3rem] md:mt-0 py-4 md:py-0 md:bg-transparent bg-gray-100 w-full md:w-auto left-0 transition-all duration-1000 ease-in ${isMenuOpen ? 'top-10 md:top-0 flex':'top-[-490px] md:top-0 flex'}`}>
          <li className="font-Inter text-[1rem] text-gray-600 hidden md:block">
            <Link to="/Login" relative='path'>Payment Status</Link>
          </li>
          <li className="font-Inter text-[1rem] text-gray-600">
            <HashLink to="#Features" smooth relative='path'>Features</HashLink>
          </li>
          <li className="font-Inter text-[1rem] text-gray-600 block md:hidden">
            <Link to="/Login" relative='path'>Privacy Policy</Link>
          </li>
          <li className="font-Inter text-[1rem] text-gray-600">
            <Link to="/support" relative='path'>Support</Link>
          </li>
        </ul>
      </div>
      <div>
        <Button value={"Make a Payment"} id={"nav-button"} />
      </div>

      <div className='bar md:hidden'>
        {isMenuOpen ? 
        (<svg onClick={toggleMenu} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8L8 14M8 8L14 14M6.86 1H15.14L21 6.86V15.14L15.14 21H6.86L1 15.14V6.86L6.86 1Z" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>) 
        : (
          <svg onClick={toggleMenu} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H19M1 1H19M1 13H19" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Header;
