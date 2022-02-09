import React from 'react';
import styled from 'styled-components';
import {ReactComponent as ArrowIcon} from './../images/arrow.svg';
function Ad({bgColor,btnColor,image,type1,text1,type2,text2,type3,text3,type4,text4,btn}) {
    console.log(bgColor);
  return (
      <>
        <Container bgColor={bgColor}>
            <Image>
                <img src={image}/>
            </Image>
            <MobileDisappear  bgColor={bgColor}>
                <div className="textbox">
                    <LineOne>
                        `<div className={type1}>{text1}</div>
                        <div className={type2}>{text2}</div>`
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
    height:350px;
    display: flex;
    height:350px;
    align-items: center;
    text-align:center;
    margin: 0px auto;/*put item center*/
    .title{
        font-size:24px;
        padding-bottom:5px;
    }
    .subtitle{font-size:20px;}
    .text{font-size:18px;}
`
const Image = styled.div`
img {
    width: auto;
    height: 350px;
    object-fit: cover;
  }
  position:initial;
  z-index:-1;
`
const MobileDisappear = styled.div`
margin:0 auto;
width:600px;
color:#494949;
height:350px;
position:initial;
z-index:1;
background-color:${({bgColor})=>bgColor};
.textbox{
    z-index:10;
    display: flex;
    flex-direction:column;
    align-items: center;
}
// @media (max-width: 968px) {
//     display:none;
// }
`
const LineOne = styled.div`
padding-bottom:40px;
`
const LineTwo = styled.div`
padding-bottom:40px;`
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