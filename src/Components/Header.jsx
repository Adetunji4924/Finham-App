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
  return (
    <div className={`${
      isSticky ? 'fixed top-0 left-0 w-full' : ''
    } flex justify-between items-center z-50 bg-gray-100 border-2 px-[5rem] py-[1rem] backdrop-blur-md bg-opacity-50`}>
      {/* <a href="/">
        <img src="src/images/MASTERLOGO (Black)-1 1.png" alt="Finham Logo" />
      </a> */}
      <Link to="/" relative='path'>
        <img src="src/images/MASTERLOGO (Black)-1 1.png" alt="Finham Logo" />
      </Link>
      <div>
        <ul className="flex justify-center items-center gap-[3rem]">
          <li className="font-Inter text-[1rem] text-gray-600">
            <Link to="/Login" relative='path'>Payment Status</Link>
          </li>
          <li className="font-Inter text-[1rem] text-gray-600">
            <HashLink to="#Features" smooth relative='path'>Features</HashLink>
          </li>
          <li className="font-Inter text-[1rem] text-gray-600">
            <Link to="/support" relative='path'>Support</Link>
          </li>
        </ul>
      </div>
      <div>
        <Button value={"Make a Payment"} id={"nav-button"} />
      </div>
    </div>
  );
};

export default Header;
