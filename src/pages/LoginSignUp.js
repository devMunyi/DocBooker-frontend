/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import PopUp from '../components/PopUp';
import './css/login.css';

const LoginSignUp = () => {
  const navigate = useNavigate();
  const UserUrl = `${process.env.REACT_APP_API_BASE_URL}/users`;
  const [username, setUsername] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = async () => {
    if (username.trim().length < 1) {
      toast.error('Username is required');
      return false;
    }
    try {
      setLoading(true);
      const response = await fetch(`${UserUrl}/${username}`);
      console.log('RESPONSE => ', response);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        toast.success('Logged in successfully!');
        navigate('/');
      } else if (response.status === 404) {
        // User does not exist, show popup to confirm creating new user
        setShowPopup(true);
      } else {
        throw new Error('There is a connection issue, please try again later');
      }
    } catch (error) {
      toast.error('There is a connection issue, please try again later');
    } finally {
      setLoading(false);
    }
    return true;
  };

  const handleCreateUser = async () => {
    // Make API call to create new user
    // Redirect to landing page
    try {
      const response = await fetch(UserUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      if (response.ok) {
        const data = await response.json();
        // New user created, redirect to landing page
        toast.success('User created successfully!');
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/');
      } else {
        throw new Error('Failed to create user');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to create user');
    }
  };

  const cancelPopUpAction = () => {
    setShowPopup(false);
  };

  return (
    <div className="login-container">
      <h2>Login or Signup</h2>
      <div className="input-container">
        <input className="username-input" type="text" value={username} onChange={handleUsernameChange} placeholder="username" />
      </div>
      {
        loading ? (
          <button
            className="btn btn-outline-primary"
            type="button"
            disabled
          >
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            <span className="">Loading...</span>
          </button>
        )
          : (<button className="login-btn" type="button" onClick={handleLogin}>Login/Signup</button>)
      }

      {showPopup && (
        <PopUp
          className="popup"
          message={`The user "${username}" was not found. Do you want to create a new user?`}
          confirmAction={handleCreateUser}
          cancelAction={cancelPopUpAction}
        />
      )}
    </div>
  );
};

export default LoginSignUp;
