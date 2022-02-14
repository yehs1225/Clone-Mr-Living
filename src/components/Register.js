import React,{useRef, useState} from 'react'
import './Register.css'
import {auth,db}  from "./../firebase"
import {createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore"; 
import {useNavigate} from 'react-router-dom';
function Register() {
  const [lastName,setLastName] = useState('');
  const [firstName,setFirstName]=useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const signIn =async(e) =>{
    e.preventDefault();//not to refresh the page
    createUserWithEmailAndPassword(auth,email,password)
    .then(async(userCred)=>{
        const user = userCred.user;
      //if create successfully, add user to Collection "SignedUpUserData"
        await setDoc(doc(db,'SignedUpUserData',user.uid),{
        LastName:lastName,
        FirstName:firstName,
        Phone:phone,
        Email:email,
        Password:password,
      });
      navigate('/');
    })
    .catch(error=>alert(error.message))
  }
  return (

    <div className="register">
        <form>
            <input 
              placeholder="  姓" type="text" name="username" className="login-box" required
              value={lastName} onChange={e => setLastName(e.target.value)}/>
            <input 
              placeholder="  名" type="text" name="username" className="login-box" required
              value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <input 
              placeholder="  手機號碼，格式09XXXXXXXX" type="text" name="username" className="login-box" 
              value={phone} onChange={e => setPhone(e.target.value)}required/>
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