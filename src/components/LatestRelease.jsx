import fantasy from "../resources/fantasy.json";
import {Component} from "react";
import {Button, Card, Col, Row, Container} from "react-bootstrap";

class LatestRelease extends Component {
  state = {
    selected: null, // the state is none right now.
  };

  render() {
    // console.log("I am being seen!");

    return (
      // fluid will make it width full across the page.
      <Container fluid>
        <h1 className="d-flex justify-content-center my-3 ">
          Strive Book Store
        </h1>
        <Row className="justify-content-center mt-3">
          {/* Map Start */}
          {fantasy.map((book, i) => (
            // from here each card starts ---;
            <Col ClassName="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card
                key={book.asin}
                style={{width: "18rem"}}
                onClick={() =>
                  this.setState({
                    selected: book,
                  })
                }
              >
                <Card.Img variant="top" src={book.img} fluid />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Category: {book.category}</Card.Text>
                  <Card.Text>Price: {book.price}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
