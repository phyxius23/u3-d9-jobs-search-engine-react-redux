import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favouriteJobs = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={9}>
          <h1 className="text-center mt-3">Aziende Preferite</h1>
        </Col>
      </Row>
      {favouriteJobs.map((favouriteJob, index) => {
        return (
          <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }} key={index}>
            <Col xs={9}>
              <Link to={`/${favouriteJob}`}>{favouriteJob}</Link>
            </Col>
            <Col xs={3} className="text-right">
              <Button variant="danger" onClick={dispatch({ type: "DELETE_FAVOURITES", payload: favouriteJob })}>
                Delete
              </Button>
              {/* <Link to={`/${favouriteJob}`}>{favouriteJob}</Link> */}
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
export default Favourites;
