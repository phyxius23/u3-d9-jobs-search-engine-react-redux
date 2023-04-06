// import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";

// per poter accedere allo state globale o Redux Store devo importare useSelector
import { useSelector, useDispatch } from "react-redux";

const MainSearch = () => {
  // const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  const query = useSelector((state) => state.mainSearch.query);
  const jobs = useSelector((state) => state.mainSearch.jobs);

  // mi serve per comunicare al Redux Store i dati da modificare
  const dispatch = useDispatch();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    // setQuery(e.target.value);
    dispatch({ type: "SEARCH_QUERY", payload: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      console.log(query);
      if (response.ok) {
        const { data } = await response.json();
        // setJobs(data);
        dispatch({ type: "ALL_JOBS", payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
