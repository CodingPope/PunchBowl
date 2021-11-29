import './register.css';

export default function Register() {
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
            <input
              type="Username"
              className="loginInput"
              placeholder="Username"
            />
            <input type="Email" className="loginInput" placeholder="Email" />
            <input
              type="Password"
              className="loginInput"
              placeholder="Password"
            />
            <input
              type="Password"
              className="loginInput"
              placeholder="Password Again"
            />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Log into Account</span>
            <button className="loginRegisterButton">Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
