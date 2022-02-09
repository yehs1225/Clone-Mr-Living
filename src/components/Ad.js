import React from 'react';
import styled from 'styled-components';
import {ReactComponent as ArrowIcon} from './../images/arrow.svg';
function Ad({bgColor,btnColor,image1,image2,type1,text1,type2,text2,type3,text3,type4,text4,btn}) {
  return (
      <>
        <Container bgColor={bgColor}>
            <Image image1 ={image1} image2 ={image2}>
                {/* <img src="https://www.mrliving.com.tw/media/wysiwyg/MCM-hotsales-box-M_v3_1_1.jpg"/> */}
                {/* <img src="https://www.mrliving.com.tw/media/wysiwyg/MCM-hotsales-box-M_v3_1_1.jpg"/> */}
            </Image>
            <MobileDisappear  bgColor={bgColor}>
                <div className="textbox">
                    <LineOne>
                        <div className={type1}>{text1}</div>
                        <div className={type2}>{text2}</div>
                    </LineOne>
                    <LineTwo>
                        <div className={type3}>{text3}</div>
                        <div className={type4}>{text4}</div>
                    </LineTwo>  
                    <Button btnColor={btnColor}>
                        <div></div>
                        <div>{btn}</div>
                    </Button>
                </div>
            </MobileDisappear>      
        </Container>            
      </>
  );
}

export default Ad;
const Container = styled.div`
color:#333333;
display:flex;
height:350px;
text-align: center;
position:relative;
overflow: hidden; /* Hide scrollbars */
.title{
    font-size:24px;
    padding-bottom:5px;
}
.subtitle{font-size:20px;}
.text{font-size:18px;}
@media (max-width: 768px) {
    flex-direction:column;
    height:650px;
}
`
const Image = styled.div`
flex:5;
z-index:-1;
position: relative;
background-image:${props =>`url("${props.image1}")`};
background-size: cover;
@media (max-width: 768px) {
    background-size: cover;
    background-image:${props =>`url("${props.image2}")`};
}
`
const MobileDisappear = styled.div`
position: relative;
flex:3;
z-index:10;
padding-top:50px;
background-color:${({bgColor})=>bgColor};
.textbox{
    display: flex;
    flex-direction:column;
    align-items: center;
    
}
@media (max-width: 768px) {
    height:80%;
    padding-bottom:30px;
    // display:none;
}
`
const LineOne = styled.div`
padding-bottom:40px;
`
const LineTwo = styled.div`
padding-bottom:40px;
`
const Button = styled.div`

    display:flex;
    padding:5px 10px;
    background-color:${({btnColor})=>btnColor};
    color:white;
    border-radius:50px;
    justify-content: center;
    align-items: center;
    div{font-size:25px;}
    font-weight:600;
    width:200px;
    
`