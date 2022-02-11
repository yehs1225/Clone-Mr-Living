import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import Login from './Login';
import Register from './Register';
import {Link,useLocation} from 'react-router-dom';
function HandleAccount() {
    const location = useLocation();
    const {type} = location.state;
    const [action,setAction] = useState(type);
    const handleChange2Register = ()=>{
        setAction('register');
    }
    const handleChangeLogin = ()=>{
        setAction('login');
    }
  return (
    <Container>
        <Main>
            <LeftImage/>
            <RightForm>
                <ChangeBtn>
                    <LoginForm 
                        onClick={handleChangeLogin} addline={(action==='login')&&('border-bottom: 4px solid #e6dbc3;')}>
                        <b>密碼登入</b>
                    </LoginForm>
                    <RegisterForm 
                        onClick={handleChange2Register} addline={(action==='register')&&('border-bottom: 4px solid #e6dbc3;')}>
                        <b>註冊</b>
                    </RegisterForm>
                </ChangeBtn>
                <InputBox>
                    {(action==='login')&&(<Login/>)}
                    {(action==='register')&&(<Register/>)}
                </InputBox>
            </RightForm>
            <BottomLine color="#e6dbc3" height={1}/>
            <BottomLine color="#2e2e2e" height={0}/>
            {/*  */}
        </Main>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
            <CloseIcon fontSize="large"/>
        </Link>
        
    </Container>
  )
}

export default HandleAccount
const Container = styled.div`
    display: flex;
    background-color:white;
`

const Main = styled.div`
    width: 750px;
    height: 615px;
    display: flex;
    position: relative;
`
const LeftImage= styled.div`
    width: 350px;
    height: 535px;
    background: url("https://www.mrliving.com.tw/media/mobilelogin/backimage/default/login-pic.jpeg");
`
const RightForm = styled.div`
    width: 400px;
    height: 535px;
`
const ChangeBtn = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
`
const InputBox =styled.div`
    padding:40px 0 0 20px ;
`
const LoginForm = styled.div`
    padding-top: 15px;
    padding: 15px 44px 0 44px;
    ${props =>`${props.addline}`};
`
const RegisterForm = styled.div`
    padding: 15px 60px 0 60px;
    ${props =>`${props.addline}`};
`
const BottomLine = styled.div`
    width: 750px;
    height:7px;
    background-color:${props =>`${props.color}`};
    position: absolute;
    bottom: ${props =>`${props.height*7}px`};
    left: 0;
`