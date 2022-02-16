import React,{useState} from 'react';
import './Login.css';
import {auth}  from "./../firebase";
import {useStateValue } from './../StateProvider';
import { signInWithEmailAndPassword, setPersistence,browserSessionPersistence} from "firebase/auth";
import {getUserCart} from './../utils';
import {useNavigate} from 'react-router-dom';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
const LoginForm = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const [{product},dispatch]=useStateValue();
  const signIn = e=>{
    setPersistence(auth, browserSessionPersistence)
    e.preventDefault();//not to refresh the page
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      //signed in 
      const user = userCredential.user;
      getUserCart(user).then((event)=>{
        event.map(arr=>{
          arr.forEach(obj=>{
            for (const [key, value] of Object.entries(obj)) 
            { 
              product.forEach(item => {
                if(item.id===key){ 
                  dispatch({
                    type:'ADD_TO_BASKET',
                    item:
                    {
                      id:`${item.id}`,
                      imageUrl:`${item.imageUrl}`,
                      title:`${item.title}`,
                      price:`${item.price}`,
                      quantity:value
                    }
                  })
                }
              });
            }
          })

        })
      });
      navigate('/');
    })
    .catch(error=>alert(error.message))
  }
  return (
    <div className="login">
        <form>
            <input 
              placeholder="  Email" type="text" className="login-box" required
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
