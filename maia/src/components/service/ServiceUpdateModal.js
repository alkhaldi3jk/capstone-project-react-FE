// import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import serviceStore from "../../stores/serviceStore";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";

function ServiceUpdateModal({ oldService }) {
  const [show, setShow] = useState(false);
  const [service, setService] = useState({
    name: oldService.name,
    image: oldService.image,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setService({ ...service, [event.target.name]: event.target.value });

    const handleImage = (event) =>
    setService({ ...service, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    serviceStore.updateService(service, oldService._id);
    console.log(service);
    handleClose();
  };

  return (
    <>
    <Button variant="secondary" onClick={handleShow}>
      {oldService ? "Edit" : "New"}
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text>Name</InputGroup.Text>
            <FormControl
              placeholder="Your service's name"
              name="name"
              value={service.name}
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Image</InputGroup.Text>
            <FormControl
              name="image"
              type="file"
              onChange={handleImage}
              placeholder="Image"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Description</InputGroup.Text>
            <FormControl
              name="description"
              value={service.description}
              type="text"
              onChange={handleChange}
              placeholder="Description"
            />
          </InputGroup>
         
          <Button variant="secondary" type="submit">
            {oldService ? "Edit" : "Add"} Service
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  </>
  );
}

export default ServiceUpdateModal;
