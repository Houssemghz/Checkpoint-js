import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div>
      <Container classname="container">
        <Row className="row">
          <Col className="columns">
            <Form>
              <Form.Group>
                <br />
                <i className="title">Choose Track Music To Upload</i>
                <br />
                <br />
                <Form.File id="exampleFormControlFile1" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="row">
          <Col className="columns">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="save me" />
              </Form.Group>
              <Button variant="primary" type="submit" className="buttom">
                Submit
              </Button>
              <br />
              <br />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
