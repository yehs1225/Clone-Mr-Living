import React from 'react';
import './Announcement.css'
function Anouncement() {
  return (
      <div className="annoucement">
        <ul >
          <li className="title">疫情期間參觀注意事項：</li>  
          <li className='item'>1｜參觀務必配戴口罩，未配戴禁止入內參觀。</li>
          <li className='item'>2｜疫情期間採輪班制，週末人力較少請見諒。</li>
          <li className='item'>3｜體驗店開放周一至周日均可參觀，歡迎蒞臨體驗。</li>
        </ul>        
      </div>
  );
}

export default Anouncement;
