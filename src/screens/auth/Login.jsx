import React, { useState } from 'react';
import '../../styles/auth/Login.css';
import Arrow from '../../assets/images/arrow.svg';
import { Link } from 'react-router-dom';
import Eye from '../../assets/images/eye-solid.svg';
import CloseEye from '../../assets/images/eye-slash-solid.svg';

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPass, setShowPass] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('object');
  };
  return (
    <div className="loginContainer">
      <form onSubmit={submitHandler} action="">
        <div>
          <label className="lableText" htmlFor="username">
            Username
          </label>
          <div className="inputout">
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setShowPass(false)}
              value={username}
              id="username"
            />
          </div>
        </div>

        <div>
          <label className="lableText" htmlFor="password">
            Password
          </label>
          <div className="inputout">
            <input
              style={{ paddingRight: 45 }}
              value={password}
              type={`${showPass ? 'text' : 'password'}`}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />

            <img
              onClick={() => setShowPass(!showPass)}
              src={showPass ? Eye : CloseEye}
            />
          </div>
        </div>

        <div className="btnOut">
          <button
            disabled={username && password ? false : true}
            className={`loginBtn ${username && password ? 'enable' : ''}`}
            type="submit"
          >
            Login
          </button>
        </div>

        <div className="noCredentialContainer">
          <p>No credentials? Join the waitlist now to get acess</p>
          <Link to="#">
            <img src={Arrow} alt="" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
