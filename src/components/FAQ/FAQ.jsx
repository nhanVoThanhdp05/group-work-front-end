import React from 'react';
import CollapseCard from './features/CollapseCard';

import './FAQ.scss';
export default function FAQ() {
  
  const image_url = 'https://devplus.edu.vn/assets/images/devplus/video_03.png';

  return (
    <div className="faq-section">
      <div className="container custom-container">
        <div className="row">
          <div className="col-xl-6 no-padding">
            <div className="left-section-content">
              <div className="left-section-title">
                <h2>Some common concerns</h2>
              </div>
              <div className="left-section-faq">
                <CollapseCard />
              </div>
            </div>
          </div>
          <div className="col-sl-6 no-padding">
            <div className="right-section right-image" style={{backgroundImage: {image_url}}}>
              <a href="https://www.youtube.com/watch?v=mUjhiT0zSKI" className="right-video">
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
