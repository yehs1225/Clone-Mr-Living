import React from 'react';
import './Home.css'
import Anouncement from './Announcement';
import Ad from './Ad';
function Home() {
  return <div className='home'>
      <div className="home__section">
        <Anouncement/>
      </div>

      <div className="home__section">
        <Ad
        image='https://www.mrliving.com.tw/media/wysiwyg/MCM-hotsales-box-W_1.jpg'
        type1="title" text1="Mid-Century Modern" 
        type2="title" text2="北歐復古風格" 
        type3="text" text3="客廳 | 餐廳 | 臥房" 
        type4="text" text4="復古實木家具推薦" 
        btn="立即逛逛"
        bgColor="#e8e7e5"
        btnColor="#333333"
        />
      </div>
      <div className="home__section">
        <Ad
        image='https://www.mrliving.com.tw/media/wysiwyg/hotsales-box-diningroom-sales-pcv2.jpg'
        type1="subtitle" text1="北歐風" 
        type2="subtitle" text2="餐廳家具推薦" 
        type3="subtitle" text3="居友首選" 
        type4="" text4="餐桌椅選購指南" 
        btn="立即逛逛 ▶"
        bgColor="#e8e7e5"
        btnColor="#333333"
        />
      </div>
      <div className="home__section">
        <Ad
        image='https://www.mrliving.com.tw/media/wysiwyg/20206M1W_Hotsale_bedroom_PC.jpg'
        type1="title" text1="風格寢室家具推薦" 
        type2="text" text2="簡約北歐 | 復古家具 | 暖心鄉村" 
        type3="text" text3="原木質感雙人床架/床頭櫃/收納家具" 
        type4="" text4="" 
        btn="理想寢室空間 ▶"
        bgColor="#c2c1bd"
        btnColor="#953d33"
        />
      </div>
      <div className="home__section">
        <Ad
        image='https://www.mrliving.com.tw/media/wysiwyg/20206M1W_Hotsale_carrara_PC_1_.jpg'
        type1="title" text1="風格寢室家具推薦" 
        type1="title" text1="Carrara 大理石家具推薦" 
        type2="text" text2="義大利天然山脈大理石" 
        type3="text" text3="百年成材的北美白橡木" 
        type4="" text4="" 
        btn="品味百年經典 ▶"
        bgColor="#ffffff"
        btnColor="#333333"
        /> 
      </div>
  </div>;
}

export default Home;
