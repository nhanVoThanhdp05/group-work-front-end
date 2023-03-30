import React, { useState } from "react";
import "./Footer.scss";
import "antd/dist/antd.css";
import { Col, Row } from "antd";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer__top">
          <div className="container">
            <Row className="footer__row">
              <Col lg={6} xs={24} sm={24} md={24} className="footer__widget">
                <h4 className="widget__title">
                  Develop the skills to move fast and stay ahead.
                </h4>
                <ul className="widget__description">
                  <li>
                    Devplus is not a training center, it’s battle campus for you
                    to level up your skillsets and ready to onboard any projects
                    in our “kindest” companies listing
                  </li>
                </ul>
              </Col>
              <Col lg={6} xs={24} sm={24} md={24} className="footer__widget">
                <h4 className="widget__title">For develop</h4>
                <ul className="widget__description">
                  <li>
                    <a href="#" target="_blank">
                      Training space
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      Alumni network
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      Connect with experts
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={6} xs={24} sm={24} md={24} className="footer__widget">
                <h4 className="widget__title">Our campus</h4>
                <ul className="widget__description">
                  <li>
                    <a href="#" target="_blank">
                      One plus (+) Programing foundation
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      Two plus (++) Skill up and onboard
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      Three plus (+++) Become a senior
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={6} xs={24} sm={24} md={24} className="footer__widget">
                <h4 className="widget__title">Address</h4>
                <ul className="widget__address">
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div className="desc">
                      116 - 118 Đường Mai Thúc Lân, Mỹ An, Ngũ Hành Sơn, Đà Nẵng
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div className="desc">
                      <a href="tel:0368492885">(+84) 368492885</a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <div className="desc">
                      <a href="mailto:Hello@devplus.edu.vn">
                        Hello@devplus.edu.vn
                      </a>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <Row className="middle">
              <Col lg={8} xs={24} sm={24} md={24} className="middle__component">
                <div className="footer__logo">
                  <a className="logo">
                    <img src="https://devplus.edu.vn/assets/images/Artboard_2.png" />
                  </a>
                </div>
              </Col>
              <Col
                lg={8}
                xs={12}
                sm={24}
                md={24}
                className="middle__component"
              ></Col>
              <Col lg={8} xs={24} sm={24} md={24} className="middle__component">
                <ul className="footer__social">
                  <li>
                    <a target="_blank" href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>Facebook</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
      <div id="scrollUp" style={{ display: "block" }} onClick={scrollToTop}>
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </div>
    </>
  );
};

export default Footer;
