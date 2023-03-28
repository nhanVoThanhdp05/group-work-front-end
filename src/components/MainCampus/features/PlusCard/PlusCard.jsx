import React from "react";
import PropTypes from "prop-types";

import "./PlusCard.scss";

PlusCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

PlusCard.defaultProps = {
  title: '',
  image: '',
};

export default function PlusCard(props) {
  const { title, image } = props;

  return (
    <div
      className="col-lg-4 col-md-6 plus-card wow fadeInUp"
      data-wow-delay="300ms"
      data-wow-duration="2000ms"
    >
      <div className="course">
        <div className="course-image">
          <img src={image} alt="course-image" />
        </div>
        <div className="course-content">
          <h3 className="course-content-title">{title}</h3>
        </div>
      </div>
    </div>
  );
}
