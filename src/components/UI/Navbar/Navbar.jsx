import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <nav className='navbar'>
      <MyButton onClick={logout}>Logout</MyButton>
      <div className='navbarLinks'>
        <Link className='link' to='/about'>
          About
        </Link>
        <Link className='link' to='/posts'>
          Posts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
