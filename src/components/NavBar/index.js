import { Navbar, Nav, Button } from "react-bootstrap";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import React, { useContext, useState} from "react";
import "./style.css";
import * as ROUTES from "../../constant/routes";
import { AuthContext } from "../../services/auth";

import { Link } from "react-router-dom";
import { signOut } from "../../states/actions/auth";
import { firestore } from "../../services/firebase/firebase";

export const NavBar = ({ style }) => {
  const { currentUser } = useContext(AuthContext);
  const [privilege, setPrivilege] = useState(null);
  const UID = currentUser?.uid;
  const db = firestore.doc(`User/${UID}`);
  db.get().then((doc) => {
    if (doc.exists) {
      setPrivilege(doc.data().privilege);
    }
  });
  console.log('nav ===== ' + (currentUser && privilege === 'admin'));
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
          {currentUser && privilege === 'admin' ? 
            (<Nav.Link
            style={{ color: style.color }}
            href={ROUTES.ADMIN}
            className="app__navbar-link"
            >
              Quản lý
            </Nav.Link>
          ) : null} 
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
                setPrivilege(null);
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
