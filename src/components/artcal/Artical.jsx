import React from 'react';
import './artical.css';


const Artical = ({imgUrl ,date, title}) => {
  return (
    <div className='gpt3__blog-container_artical'>
      <div className="gpt3__blog-container_artical-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="gpt3__blog-container_artical-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Artical</p>
      </div>
      
    </div>
  )
}

export default Artical
