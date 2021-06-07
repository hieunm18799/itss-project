import { Navbar, Nav, Button } from "react-bootstrap";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import React, { useContext } from "react";
import "./style.css";
import * as ROUTES from "../../constant/routes";
import { AuthContext } from "../../services/auth";

import { Link } from "react-router-dom";
import { signOut } from "../../states/actions/auth";

export const NavBar = ({ style }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Navbar
      style={{ ...style }}
      className="app__navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand
        href={currentUser !== null ? ROUTES.COURSE : ROUTES.LANDING}
        className="app__logo"
        style={{ color: style.color }}
      >
        <BsFillBrightnessHighFill
          className="app__icon"
          style={{ color: style.color }}
        />
        Free Nihongo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto app__navbar-list">
          <Nav.Link
            style={{ color: style.color }}
            href={ROUTES.COURSE}
            className="app__navbar-link"
          >
            Khóa học
          </Nav.Link>
          <Nav.Link
            style={{ color: style.color }}
            href={ROUTES.REFERENCES}
            className="app__navbar-link"
          >
            Tài liệu
          </Nav.Link>
        </Nav>
        {currentUser === null ? (
          <Link to={ROUTES.SIGN_IN}>
            <Button
              variant="outline-secondary"
              className="app__button nav__button--login"
              style={{
                color: style.color,
                outline: `${style.outlineColor} solid 2px`,
                borderRadius: 0,
              }}
            >
              Đăng Nhập
            </Button>
          </Link>
        ) : (
          <Link to={ROUTES.LANDING}>
            <Button
              variant="outline-secondary"
              className="app__button nav__button--login"
              style={{
                color: style.color,
                outline: `${style.outlineColor} solid 2px`,
                borderRadius: 0,
              }}
              onClick={() => {
                signOut();
              }}
            >
              Đăng Xuất
            </Button>
          </Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
