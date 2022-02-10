import React from "react";
import './Login.css'
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
const LoginForm = () => {
  return (
    <div className="login">
        <form>
            <input placeholder="  Email/手機號碼" type="text" name="username" className="login-box" required/>
            <input placeholder="  密碼" type="password" name="password" className="login-box" required/>
            <button className="login-btn">登入</button>
        </form>
    </div>
  );
};

export default LoginForm;
