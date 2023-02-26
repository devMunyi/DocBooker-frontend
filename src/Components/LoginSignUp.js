import React, { useState } from 'react';
import PopUp from './PopUp';

const LoginSignUp = () => {
  const [username, setUsername] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    // Make API call to check if user exists with provided username
    // If user exists, redirect to landing page
    // If user does not exist, show popup to confirm creating new user
    // If user confirms, make API call to create new user and redirect to landing page
    // If user cancels, do nothing
    // You can use fetch() or any other library of your choice to make the API calls

    fetch(`/users/${username}`)
      .then((response) => {
        if (response.ok) {
          // User exists, redirect to landing page
          window.location.href = '/landing';
        } else if (response.status === 404) {
          // User does not exist, show popup to confirm creating new user
          setShowPopup(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreateUser = () => {
    // Make API call to create new user
    // Redirect to landing page
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => {
        if (response.ok) {
          // New user created, redirect to landing page
          window.location.href = '/landing';
        } else {
          // Error creating new user
          console.log(response.statusText);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Login or Signup</h2>
      <div>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <button type="button" onClick={handleLogin}>Login/Signup</button>
      {showPopup && (
        <PopUp
          message={`User ${username} not found. Create new user?`}
          confirmAction={handleCreateUser}
        />
      )}
    </div>
  );
};

export default LoginSignUp;
