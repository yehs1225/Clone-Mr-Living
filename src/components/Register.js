import React from 'react'
import './Register.css'
function Register() {
  return (

    <div className="register">
        <form>
            <input placeholder="  姓" type="text" name="username" className="login-box" />
            <input placeholder="  名" type="text" name="username" className="login-box" />
            <input placeholder="  手機號碼，格式09XXXXXXXX" type="text" name="username" className="login-box" />
            <input placeholder="  Email" type="text" name="username" className="login-box" required/>
            <input placeholder="  密碼" type="password" name="password" className="login-box" required/>
            <button className="login-btn">註冊</button>
             
        </form>
    </div>
  )
}

export default Register