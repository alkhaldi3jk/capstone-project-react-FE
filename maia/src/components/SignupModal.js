import React from "react";
import { Button, Modal, Row, Form, Col } from "react-bootstrap";
import { useState } from "react";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

function SignupModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    authStore.signup(user);
    handleClose();
  };
  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Username
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  onChange={handleChange}
                  name="username"
                  required
                  placeholder="Username"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name="password"
                  required
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default observer(SignupModal);
