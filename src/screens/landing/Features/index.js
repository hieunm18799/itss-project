import { Row, Col } from "react-bootstrap";
import "./style.css";

export const Features = () => {
  return (
    <div className="landing__features landing__section" id="features">
      <div className="features__title">Tính năng</div>
      <Row className="justify-content-md-center">
        {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
        <Col>
          <div className="features__card">
            <div className="card-image feature__img--1"></div>
            <div className="card-content">
              <div className="feature__card-title">
                {" "}
                Hệ thống kiến thức toàn diện
              </div>
              <div className="card-description">
                Với danh sách các bài học phong phú, Dekiru cung cấp cho bạn một
                hệ thống kiến thức tiếng Nhật đầy đủ và toàn diện nhất: từ vựng,
                nghe hiểu, kanji hay các bài kiểm tra tiếng Nhật.
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="features__card">
            <div className="card-image feature__img--2"></div>
            <div className="card-content">
              <div className="feature__card-title">
                Học tiếng Nhật mọi lúc mọi nơi
              </div>
              <div className="card-description">
                Bằng việc có tài khoản học tập tại Dekiru, bạn đã có thể chủ
                động thời gian học tập của bản thân mình. Đặc biệt phù hợp với
                các bạn bận rộn, ít thời gian.
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="features__card">
            <div className="card-image feature__img--3"></div>
            <div className="card-content">
              <div className="feature__card-title">
                Phương pháp học tập thú vị
              </div>
              <div className="card-description">
                Chương trình học Dekiru cung cấp đầy đủ các kiến thức về tiếng
                Nhật thông qua các hoạt động tương tác, trò chơi. Dekiru sẽ giúp
                bạn cảm thấy việc ghi nhớ kiến thức là việc cực kỳ thú vị và đơn
                giản.
              </div>
            </div>
          </div>
        </Col>
        {/* </div> */}
      </Row>
      {/* </div> */}
    </div>
  );
};
