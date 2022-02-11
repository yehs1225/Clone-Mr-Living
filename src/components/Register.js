import React,{useState} from 'react'
import './Register.css'
import {auth}  from "./../firebase"
import {createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
function Register() {
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const signIn = e=>{
    e.preventDefault();//not to refresh the page
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      //signed in 
      const user = userCredential.user;
      console.log(user);
      navigate('/');
    })
    .catch(error=>alert(error.message))
  }
  return (

    <div className="register">
        <form>
            <input placeholder="  姓" type="text" name="username" className="login-box" />
            <input placeholder="  名" type="text" name="username" className="login-box" />
            <input placeholder="  手機號碼，格式09XXXXXXXX" type="text" name="username" className="login-box" />
            <input 
              placeholder="  Email" type="text" name="username" className="login-box" required
              value={email} onChange={e => setEmail(e.target.value)} />
            <input 
              placeholder="  密碼" type="password" name="password" className="login-box" required
              value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit" onClick={signIn} className="register-btn">註冊</button>
             
        </form>
    </div>
  )
}

export default Register