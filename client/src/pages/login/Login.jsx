import './login.css';

export default function Login() {
  return (
    <div className="login">
      <div className="loginWraper">
        <div className="loginLeft">
          <h3 className="loginLogo">PunchBowl</h3>
          <span className="logindesc">
            Connect with friends and the world around you on PunchBowl
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="Email" className="loginInput" placeholder="Email" />
            <input
              type="Password"
              className="loginInput"
              placeholder="Password"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
