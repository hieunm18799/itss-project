import React from "react";
import { Col, Row } from "react-bootstrap";
import FooterInfo from "./img/footer.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import "./style.css";

export const Footer = () => {
  return (
    <div className="app__footer">
      <Row>
        <Col className="footer__info footer__info--1">
          <div className="footer__info--title">Address</div>
          <div className="footer__info--content">
            Pipang Ltd, Griva Digeni,
            <br /> 81-83 Jacovides Tower,
            <br /> 1st Floor 1090 Picosia USA
          </div>
        </Col>
        <Col className="footer__info footer__info--2">
          <div className="footer__info--title">Services</div>
          <div className="footer__info--content">
            Overview
            <br />
            Features
            <br />
            Technology
            <br />
            Terms & Conditions
            <br />
            Privecy
          </div>
        </Col>
        <Col className="footer__info footer__info--3">
          <div className="footer__info--title">Get in Touch</div>
          <div className="footer__info--content">
            info@cloudbudget.com
            <br /> +1 844-721-7120
          </div>
          <div className="footer__icon-container">
            <div className="footer__icon footer__icon--facebook">
              <AiFillFacebook />
            </div>
            <div className="footer__icon footer__icon--instagram">
              <AiFillInstagram />
            </div>
            <div className="footer__icon footer__icon--twitter">
              <AiFillTwitterCircle />
            </div>
            <div className="footer__icon footer__icon--youtube">
              <AiFillYoutube />
            </div>
          </div>
        </Col>
        <Col className="footer__info footer__info--4">
          <div className="footer__info--title">We Support</div>
          <div className="footer__info--content">
            <img alt="footer-info" src={FooterInfo} />
          </div>
        </Col>
      </Row>
      <div className="footer__copyright">&copy; Copyright 2020 HTML.am</div>
    </div>
  );
};
