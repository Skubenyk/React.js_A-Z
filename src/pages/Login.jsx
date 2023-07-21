import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1>Page Login</h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='Enter login ' />
        <MyInput type='password' placeholder='Enter password ' />
        <MyButton>Log In</MyButton>
      </form>
    </div>
  );
};

export default Login;
