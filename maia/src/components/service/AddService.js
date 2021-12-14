import { React, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import serviceStore from "../../stores/serviceStore";
import authStore from "../../stores/authStore";
function AddService() {
  const [service, setService] = useState({
    name: "",
    image: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event) =>
    setService({ ...service, [event.target.name]: event.target.value });

    const handleChange2 = (event) =>
    setService({ ...service, [event.target.subtitle]: event.target.value });
    
  const handleImage = (event) =>
    setService({ ...service, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    serviceStore.createService(service);
    handleClose();
  };

  return (
    <div>
      {authStore.user ? (
        <>
          <Button 
          style={{width:150, marginTop: -7, marginBottom: 4, backgroundColor: "#4f59b1"}}
          onClick={handleShow}>
             Add New Service
          </Button>
        </>
      ) : (
        <h6>Admin has to Signin</h6>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            name="name"
            type="text"
            placeholder="choose a name for your service"
            onChange={handleChange}
          />
          <Form.Group
            controlId="formFile"
            type="file"
            name="image"
            onChange={handleImage}
            className="mb-3"
          />
            
              <Form.Control
            name="subtitle"
            type="text"
            placeholder="subtitle"
            onChange={handleChange2}
          />
            <Form.Label sm="10">Share Your Idea</Form.Label>
            <Form.Control type="file" />
          {/* </Form.Group> */}
        </Modal.Body>
        <Modal.Footer>
          <Button 
          style={{backgroundColor: "#4f59b1"}} 
          onClick={handleClose}>
            Close
          </Button>
          <Button 
          style={{backgroundColor: "#4f59b1"}}
          onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default observer(AddService);
