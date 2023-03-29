import React from "react";

import "./Administration.scss";

export default function Administration() {
    
  const image_url = "https://devplus.edu.vn/assets/images/devplus/Admission_for_2021.png";
  const first_content_description = `Disclaimer: This position is expected to start around Feb 2022 and continue through 
    the entire Summer term. We ask for a minimum of 12 weeks, full-time, for most internships. Please consider before 
    submitting an application.`;
  const second_content_description = ` Devplus aims to provide students the chance to work with our clients and awesome mentors to level up your programing
    skillset in the RIGHT path. With your education and experience, you will be able to take on real-world challenges from
    day one.`;

  return (
    <div class="administration-section">
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col-lg-6">
          <div className="left-image">
            <img src={image_url} alt="image" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp">
          <div className="content">
            <div className="content-title">
              <h2>Admission for 2021</h2>
              <div className="content-description">
                {first_content_description}
              </div>
              <div className="content-description">
                {second_content_description}
              </div>
            </div>
            <div className="end-section">
              <button class="custom-button">Apply now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
