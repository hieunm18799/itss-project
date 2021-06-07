import {
  BsFillCapslockFill,
  BsFillBrightnessHighFill,
  BsFillCursorFill,
  BsFillLayersFill,
} from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import "./style.css";

export const Stats = () => {
  return (
    <div className="stats__section landing__section">
      <div className="stats__title">Những ưu điểm vượt trội</div>
      <Row>
        <Col className="stats__card stats__card--1">
          <div className="stats__amount">500+</div>
          <div className="stats__card">
            <div className="stats__icon">
              <BsFillCapslockFill />
            </div>
            <div className="stats__content">
              <div className="stats__content--title">Bài thi</div>
              <div className="stats__content--description">
                Từ các bài kiểm tra tiếng Nhật kiến thức căn bản đến các bài thi
                năng lực theo chuẩn kỳ thi năng lực tiếng Nhật JLPT
              </div>
            </div>
          </div>
        </Col>
        <Col className="stats__card stats__card--2">
          <div className="stats__amount">1500+</div>
          <div className="stats__card">
            <div className="stats__icon">
              <BsFillBrightnessHighFill />
            </div>
            <div className="stats__content">
              <div className="stats__content--title">Bài học</div>
              <div className="stats__content--description">
                Tổng hợp đầy đủ tất cả các kiến thức từ căn bản tới nâng cao và
                kinh nghiệm học thực tế.
              </div>
            </div>
          </div>
        </Col>
        <Col className="stats__card stats__card--3">
          <div className="stats__amount">200k+</div>
          <div className="stats__card">
            <div className="stats__icon">
              <BsFillCursorFill />
            </div>
            <div className="stats__content">
              <div className="stats__content--title">Ngữ pháp</div>
              <div className="stats__content--description">
                Học và tra cứu nhanh chóng, chính xác nhất tất cả các cấu trúc
                ngữ pháp có trong tiếng Nhật.
              </div>
            </div>
          </div>
        </Col>
        <Col className="stats__card stats__card--4">
          <div className="stats__amount">2500+</div>
          <div className="stats__card">
            <div className="stats__icon">
              <BsFillLayersFill />
            </div>
            <div className="stats__content">
              <div className="stats__content--title">Từ vựng</div>
              <div className="stats__content--description">
                Kho từ vựng đầy đủ và toàn diện, dễ dàng tìm kiếm theo chủ đề và
                tra cứu nhanh chóng, chính xác.
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
