import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authenticated, notAuthenticated } from './features/login/loginSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const revalue = useSelector((state) => state.userlogin.isLoggedIn);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check for empty strings instead of null or undefined
    if (username.trim() !== '' && password.trim() !== '') {
      // Authentication logic (assuming it's synchronous)
      dispatch(authenticated(true));

      // No need for .then() here, as dispatch is synchronous

      if (revalue) {
        navigate('/home');
      } else {
        alert('Authentication failed. Please check your credentials.');
      }
    } else {
      // Dispatch notAuthenticated action if the credentials are not valid
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