import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticated, notAuthenticated } from './features/login/loginSlice';
import { postEndPoint } from './services/bookApi';
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.userlogin.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }

  })

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      if (username.trim() !== '' && password.trim() !== '') {
        const reqBody = { userName: username.trim(), password: password.trim() }
        
        const result = await postEndPoint('/login', reqBody);
        debugger
        Cookies.set('jwtToken', result, { httpOnly: true })
        console.log(await result)
        dispatch(authenticated(true));

        navigate('/home');

      } else {
        dispatch(notAuthenticated(false));
        alert('Please provide valid credentials.');
      }

    } catch (error) {
      console.log(error)
    }


  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={(e) => handleLogin(e)}>Login</button>
    </div>
  );
};

export default Login;