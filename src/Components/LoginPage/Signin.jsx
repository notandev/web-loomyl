import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoblackLoomyl from '../../Assets/logo_black_loomyl.png';
import loginReg from '../../Assets/loginreg.png';
import Inputbox from '../Ui/Inputbox';
import '../../styles/Login.css';
import { setLogin } from '../../api/auth';
import { useAuth } from '../../state/AuthProvider';
import PopUp from '../PopUp';

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [showPupUp, setShowPopUp] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setError(''); // Reset error message

    if (!email || !password) {
      setError('Email and Password are required.');
      return;
    }

    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await setLogin(payload);
      console.log(response);
      if (response.status === 200) {
        setMessage('Login Success');
        setTitle('Success');
        setShowPopUp(true);
        localStorage.setItem('token', response.data.data.token);
      } else {
        setMessage('Login Failed');
        setTitle('Failed');
        setShowPopUp(true)
      }

      // console.log(response);
      // if (response !== 200) {
      //   setError(response.response.data.message);
      //   return;
      // }
      // if (response && response.data) {
      //   localStorage.setItem('token', response.data.token);
      //   login();
      //   navigate('/landing-page');
      // } else {
      //   setError('Unexpected error. Please try again.');
      // }
    } catch (error) {
      console.log(error.response);
      // if (error.response) {
      //   setError(error.response.data.message || 'An error occurred. Please try again.');
      // } else if (error.request) {
      //   // The request was made but no response was received
      //   setError('No response from server. Please try again.');
      // } else {
      //   // Something happened in setting up the request that triggered an Error
      //   setError('An unexpected error occurred. Please try again.');
      // }
      // console.log(error);
    }
  };

  const handlePopup =() => {
    login();
    setShowPopUp(false);
    navigate('/landing-page');
  }

  return (
    <div className="signin-container">
      <div className="wrapper">
        <form onSubmit={onLogin}>
          <div className="wrap-logo-title">
            <img src={logoblackLoomyl} alt="logo" className="logo" />
            <h1 className="title-log text-left text-nowrap">Hello, Momzie!</h1>
          </div>
          <div className="flex justify-start">
            <span className="desc text-left w-full">Enter to continue and explore your pregnancy phase.</span>
          </div>
          {error && <div className="error-message">{error}</div>}
          <Inputbox required type="email" placeholder="Email" icon="bx bxs-envelope" value={email} onChange={handleEmailChange} />
          <Inputbox required type="password" placeholder="Password" icon="bx bxs-lock-alt" value={password} onChange={handlePasswordChange} />
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <div className="wrap-btn">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          <div className="register-link">
            <p>
              Dont have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="wrapper-img">
        <img className="img-log" src={loginReg} alt="Loomyl" />
      </div>
      {showPupUp && <PopUp message={message} title={title} action={handlePopup} />}
    </div>
  );
}

export default Signin;
