import { useState } from 'react'; 
import './LoginPage.css';
import InputField from '../../components/InputField';
import userIcon from '../../assets/Icons/User.svg';
import passwordIcon from '../../assets/Icons/password.svg';

const LoginPage = () => {
  const [username, setUsername] = useState(''); // Estado para o nome de usuário
  const [password, setPassword] = useState(''); // Estado para a senha

  const handleLogin = (event) => {
    event.preventDefault(); 
    // testando autenticação fake
      if (username === "admin" && password === "1234") {
        alert("Login bem-sucedido!");
        // Limpar os campos
        setUsername("");
        setPassword("");
      } else {
        alert("Usuário ou senha incorretos!");
        // limpar apenas a senha, por exemplo
        setPassword("")
      }
  };

  return (
    <div className='login-page-container'>
      <div className='auth-hero'>
        <img
          className='auth-hero-img'
          src={new URL('../../assets/telaMenor.png', import.meta.url).href}
          alt=''
        />
        <div className='Title-welcome'>
          <h1>Welcome to the Website</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate architecto voluptatem. </span>
        </div>

        <div className="login-container">
          <form onSubmit={handleLogin} className="login-form">
            <h2>USER LOGIN</h2>
            
            {/* Input para o nome de usuário */}
            <InputField
            type="text"
              placeholder="Username"
              icon={userIcon}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            
            {/* Input para a senha */}
            <InputField
              type="password"
              placeholder="Password"
              icon={passwordIcon}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {/* Seção Remember/Forgot Password */}
            <div className="remember-forgot-section">
              <div className="remember-section">
                <img src={new URL('../../assets/Icons/check.svg', import.meta.url).href} alt="check" className="check-icon" />
                <span>Remember</span>
              </div>
              <div className="forgot-section">
                <span>Forgot Password?</span>
              </div>
            </div>
            
            <button type="submit" className="login-button">login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;