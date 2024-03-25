import "./profile.scss";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
const Profile = () => {
  return (
    <>
      <BreadCrumb />
      <Container className="profile-wrapper">
        <Row className="justify-content-center">
          <Col className="col-12">
            <div className="main-header">
              <h2 className="m-0">Your Profile</h2>
            </div>
          </Col>

          <Col className="col-sm-12 col-md-6"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
