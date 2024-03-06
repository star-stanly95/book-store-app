import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticated, notAuthenticated } from './features/login/loginSlice';

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

    // Check for empty strings instead of null or undefined
    if (username.trim() !== '' && password.trim() !== '') {
      dispatch(authenticated(true));

      navigate('/home');

    } else {
      dispatch(notAuthenticated(false));
      alert('Please provide valid credentials.');
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