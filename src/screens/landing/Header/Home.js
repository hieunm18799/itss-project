import { NavBar } from "../../../components/NavBar";
import { Button } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constant/routes";

export const Home = () => {
  return (
    <div className="landing__home">
      <NavBar style={{ top: "30px", color: "#fff" }} />
      <div className="header__content-box">
        <div className="header__hero-box">
          Website học tiếng Nhật online hàng đầu Việt Nam
        </div>
        <div className="header__text-box">
          Website học tiếng Nhật trực tuyến Dekiru.vn được tích hợp đầy đủ mọi
          thông tin, kiến thức và những kỹ năng để giúp các bạn chinh phục tiếng
          Nhật một cách hoàn hảo
        </div>

        <Link to={ROUTES.SIGN_UP}>
          <Button variant="light" className="header__button app__button--full">
            Đăng kí
          </Button>
        </Link>
      </div>
    </div>
  );
};
