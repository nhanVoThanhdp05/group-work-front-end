import React from "react";


import PlusCard from "./features/PlusCard/PlusCard";
import plus_cards_list from "./cards";

import "./MainCampus.scss";
import "antd/dist/antd.css";

export default function MainCampus() {
  return (
    <div className="main-background-image">
      <div className="container custom-container">
        <div className="row wrap-content">
          <div className="col-md-12">
            <div className="title-section">
              <h2 className="title">Our main campus</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {plus_cards_list.map((card) => (
            <PlusCard title={card.title} image={card.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
