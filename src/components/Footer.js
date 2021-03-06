import React from 'react';
import './Footer.css';
import {Link } from "react-router-dom";
import EventNoteIcon from '@material-ui/icons/EventNote';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
function Footer() {
  return (
      <>
        <div className="footer">
        
            <div className="footer__container">
                <h2 className='footer__title'>追蹤我們</h2>
                <ul className="footer__section">
                    {/* add icon and link */}
                    <li><a href='https://www.instagram.com/'><img src={require('./../images/icon_ig.jpg')} className='links footer__socialmedia'/>Instagram</a></li>
                    <li><a href='https://www.youtube.com/'><img src={require('./../images/icon_youtube.jpg')} className='links footer__socialmedia'/>Youtube</a></li>
                    <li><a href='https://www.line.com/'><img src={require('./../images/icon_line.jpg')} className='links footer__socialmedia'/>Line</a></li>
                    <li><a href='https://www.facebook.com/'><img src={require('./../images/icon_fb.jpg')} className='links footer__socialmedia'/>Facebook</a></li>
                </ul>
            </div>
            <div className="footer__container">
                <div className="footer__section">
                    <h2 className='footer__title'>關於我們</h2>
                    <a className='links' href='#' >MR. LIVING 理念</a>
                </div>
                <div className="footer__section">
                    <div className="footer__subsection">
                        <h2 className='footer__title'>找客服</h2>
                            <div className='footer__customer-service'>
                            <a href='https://www.facebook.com/'><img src={require('./../images/icon_messenger.jpg')} className='footer__socialmedia'/></a>
                            <a href='https://www.line.com/'><img src={require('./../images/icon_line.jpg')} className='footer__socialmedia'/></a>
                            </div>
                    </div>
                    <div className="footer__subsection">
                        <b className='footer__subtitle'>LINE & FB客服:</b>
                        <br/>
                        <p>星期一至星期五 [ 10:30 ~ 12:00 / 13:00 ~ 19:30 ]</p> 

                    </div>
                </div>
            </div>                   
            <div className="footer__container">
                <div className="footer__section">
                    <h2 className='footer__title'>聯絡資訊</h2>
                </div>
                <div className="footer__section">
                    <div className="footer__subsection">
                        <b className='footer__subtitle'>表單】預約:</b>
                        <br/>
                        <a className='links' href='#'>填表(內有地址與停車資訊)</a> 
                    </div>
                    <div className="footer__subsection">
                        <b className='footer__subtitle'>預約參觀:</b>
                        <br/>
                        <p>星期一至星期日 / 11:00AM - 8:00PM</p> 
                    </div>
                    <div className="footer__subsection">
                        <b className='footer__subtitle'>Email:</b>
                        <br/>
                        <a className='links' href='hello@mrliving.com.tw'>hello@mrliving.com.tw</a> 
                    </div>
                    <div className="footer__subsection">
                        <b className='footer__subtitle'>床墊專屬客服:</b>
                        <br/>
                        <a className='links' href='mattress@mrliving.com.tw'>mattress@mrliving.com.tw</a> 
                    </div>
                </div>
            </div>  
            <div className="footer__container">
                <h2 className='footer__title'>會員權益</h2>
                <ul className="footer__section">
                    {/* add icon and link */}
                    <li>隱私聲明</li>
                    <li>服務條款</li>
                    <li>常見問題</li>
                </ul>
            </div>
            <div className="footer__mobile">
                <div><a href='#'><EmojiEventsIcon fontSize='large'/></a></div>
                <div><a href='#'><SearchIcon fontSize='large'/></a></div>
                <div><a href='#'><EventNoteIcon fontSize='large'/></a></div>
                <div><Link to='./Cart'><ShoppingCartIcon fontSize='large'/></Link></div>
                <div><img src={require('./../images/icon_ig.jpg')} className='links footer__socialmedia'/></div>
                <div><img src={require('./../images/icon_line.jpg')} className='links footer__socialmedia'/></div>
            </div>
        </div>      
      </>

  );
}

export default Footer;
