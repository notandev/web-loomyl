import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import loginReg from '../../Assets/loginreg.png';
import Inputbox from '../Ui/Inputbox';
import login from '../LoginPage/Signin';
import '../../styles/Register.css';
import { setRegister } from '../../api/auth';
import PopUp from '../PopUp';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPupUp, setShowPopUp] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const payload ={
      username,
      email,
      password,
    };
    setRegister(payload).then((response) => {
      console.log(response.status);
      if (response.status === 201) {
        setShowPopUp(true);
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  
  const handlePopup =() => {
    setShowPopUp(false);
    navigate('/login');
  }

  return (
    <>
      <div className="signin-container">
        <div className="wrapper-img">
          <img className="img-reg" src={loginReg} alt="Loomyl" />
        </div>
        <div className="wrapper">
          <form>
            <h1 className="title-create">Create Account</h1>
            <div className="flex justify-start">
              <span className="desc text-left">Follow the instructions to make it easier to register and you will be able to explore mom journey.</span>
            </div>
            <Inputbox type="username" placeholder="Username" icon="bx bxs-user" value={username} onChange={handleUsernameChange} />
            <Inputbox type="email" placeholder="Email" icon="bx bxs-envelope" value={email} onChange={handleEmailChange} />
            <Inputbox type="password" placeholder="Password" icon="bx bxs-lock-alt" value={password} onChange={handlePasswordChange} />
            <button disabled={!username && !email && !password} onClick={handleRegister} type="submit" className="btn">
              Create Account
            </button>

            <div className="register-link">
              <p>
                Already have an account? <Link to="/">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
        {showPupUp && <PopUp message={"Selamat anda berhasil register"} title={"Berhasil"} action={handlePopup} />}
      </div>
    </>
  );
}

export default Register;
