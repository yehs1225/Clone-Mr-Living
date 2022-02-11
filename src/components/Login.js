import React,{useState} from 'react';
import './Login.css';
import {auth}  from "./../firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from 'react-router-dom';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
const LoginForm = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const signIn = e=>{
    e.preventDefault();//not to refresh the page
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      //signed in 
      const user = userCredential.user;
      console.log(user);
      navigate('/');
    })
    .catch(error=>alert(error.message))
  }
  return (
    <div className="login">
        <form>
            <input 
              placeholder="  Email/手機號碼" type="text" className="login-box" required
              value={email} onChange={e => setEmail(e.target.value)} />
            <input 
              placeholder="  密碼" type="password" className="login-box" required
              value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit" onClick={signIn} className="sign-btn">登入</button>
        </form>
    </div>
  );
};

export default LoginForm;
