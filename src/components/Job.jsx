import { Row, Col, Button } from "react-bootstrap";
import { HeartFill, Plus } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  // const job = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3} className="text-right">
        <Button
          onClick={() => {
            dispatch({ type: "ADD_FAVOURITES", payload: data.company_name });
          }}
        >
          <Plus />
          <HeartFill />
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
