import React from 'react'
import './Top.css'
import Carousel from 'react-bootstrap/Carousel'
function Top() {
  return (
    <div className='top__left'>
        <div className="top__menu">
            <h3 className="menu__title ">熱門點擊</h3>
                <div className="hot-hit menu">
                    <a className="menu__option" href="#">即將調漲家具專區</a>
                    <a className="menu__option" href="#">床墊/枕頭/寢具推薦</a>
                    <a className="menu__option" href="#">北歐復古風家具</a>
                    <a className="menu__option" href="#">防潑水防貓抓布沙發</a>
                    <a className="menu__option" href="#">透氣親膚全牛皮沙發</a>
                    <a className="menu__option" href="#">預約體驗全台門市</a>
                </div>
        </div> 
        <div className="down__menu">
            
            <h3 className="menu__title">了解更多</h3>
                <div className="know-more menu">
                    <a  className="menu__option" href="#">居家先生部落格</a>
                </div>
        </div>
        <div className="top__slide">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./../images/price_increase_slider.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./../images/price_increase_slider.jpg")}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./../images/price_increase_slider.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    </div>
  )
}

export default Top