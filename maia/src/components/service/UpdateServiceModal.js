import { React, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

function UpdateServiceModal() {
  const [show, setShow] = useState(false);
  const [service, setService] = useState({
    name: "",
    image: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleImage = (event) =>
    setService({ ...service, image: event.target.files[0] });
  const handleChange = (event) =>
    setService({ ...service, [event.target.name]: event.target.value });

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {/* REVIEW: Remove dummy text */}
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/*  REVIEW: Put a proper title  */}
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            name="name"
            type="text"
            placeholder="choose a name of your category"
            onChange={handleChange}
          />
          <Form.Group
            controlId="formFile"
            type="file"
            name="image"
            onChange={handleImage}
            className="mb-3"
          >
            <Form.Label>Share Your Idea</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateServiceModal;
