import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import descriptionImg1 from "../img/feature-1.png";
import descriptionImg2 from "../img/feature-2.png";
import descriptionImg3 from "../img/feature-3.png";
import "./style.css";

export const Description = () => {
  return (
    <div className="description__section landing__section">
      <Row>
        <Col>
          <div className="description-main">
            <div className="description-title">
              Cần phải{" "}
              <span style={{ textTransform: "uppercase" }}>bắt đầu từ đâu</span>{" "}
              và học như thế nào?
            </div>
            <div className="description-content">
              Để trả lời câu hỏi này, trước hết bạn phải tham gia bài kiểm tra
              tiếng Nhật đánh giá năng lực tiếng Nhật theo chuẩn các cấp độ JLPT
              của chúng tôi. Kết quả bài kiểm tra tiếng Nhật sẽ là căn cứ để
              chúng tôi xây dựng một lộ trình học với đầy đủ các kiến thức và kỹ
              năng phù hợp cho bạn.
            </div>
            <Button className="description-button" variant="success">
              Kiểm tra đánh giá trình độ
            </Button>
          </div>
        </Col>
        <Col>
          <div className="description_img-contain">
            <img
              alt="img"
              src={descriptionImg1}
              className="description-img description-img--1"
            />
            <img
              alt="img"
              src={descriptionImg2}
              className="description-img description-img--2"
            />
            <img
              alt="img"
              src={descriptionImg3}
              className="description-img description-img--3"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
