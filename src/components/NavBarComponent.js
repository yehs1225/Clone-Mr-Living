import React,{useState} from 'react';
import './NavBarComponents.css';
function NavBarComponent(props) {
  const[isHover,setIsHover] = useState(false);
  const[isHoverItem,setIsHoverItem] = useState(false);
  const Title2Item = {
    '首頁':null,
    '即將漲價區':[['必入手推薦','客廳','寢室書房','餐廳'],
                ['#','#','#','#']],
    '現貨家具':[['客廳','寢室','餐廳','書房','收納家具'],
                ['#','#','#','#','#']],
    "空間單品":[['客廳','沙發','單椅/腳凳','茶几/邊几','電視櫃','鞋櫃/收納櫃架','寢室','床架','床頭櫃','化妝桌/椅',
    '斗櫃/層架','餐廳','餐桌/板凳','餐椅','中島/吧椅','層架/邊櫃','書房','書桌/辦公桌','工作椅/辦公椅','書架/層架','床枕寢具'],
                ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']],
    "系列推薦":[['北歐復古風家具','北歐風家具','工業風家具','輕奢風家具','Carrara 大理石家具'],
                ['#','#','#','#','#']],
    "床枕寢具":[['床墊/薄墊','枕頭','棉被/保潔墊'],
                ['#','#','#']],
    "沙發":[['風格類型','防潑水防貓抓布沙發','北歐簡約布沙發','嚴選全牛皮沙發', '美式鄉村沙發','熱門北歐','Bryant Jasper',
    'Bruce Bulls','尺寸類型','L型布沙發/L型皮沙發','3人座三人沙發','2人座雙人沙發','單椅/主人椅/單人沙發','沙發腳凳'],
                ['#','#','#','#','#','#','#','#','#','#','#','#','#','#']],
    "BLOG":null,
    "關於我們":null
  }
  return (
    <>
      <div className='navbarcomponent'onMouseEnter={()=>setIsHover(true)}onMouseLeave={()=>setIsHover(false)}>
        <a  href='#' className="navbar__homepage">
          <div className='navbarcomponent__title' >
            {props.title} 
          </div> 
        </a>   
      </div>
            {isHover&&Title2Item[props.title]&&(
              <div className='navbarcomponent__container' onMouseEnter={()=>setIsHover(true)}onMouseLeave={()=>setIsHover(false)}>
                <span className='container__items'>
                    {Title2Item[props.title][0].map((item,index)=>( <a key={index} href={Title2Item[props.title][1][index]}><span>{Title2Item[props.title][0][index]}</span></a>))}
                </span>
              </div>
      
            )}
    </>
  );
}

export default NavBarComponent;
