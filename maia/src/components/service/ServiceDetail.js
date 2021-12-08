import { observer } from "mobx-react";
import React from "react";
import { Redirect, useParams } from "react-router";
import serviceStore from "../../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import ServiceList from "./ServiceList";
import ServiceUpdateModal from "./ServiceUpdateModal";
import { Button, Card, Col } from "react-bootstrap";

function ServiceDetail() {
  const handleDelete = () => serviceStore.deleteService(service._id);
  const {serviceId} = useParams();
  const service = serviceStore.services.find(
    (service) => service._id === serviceId
  );
  if (!service) return <Redirect to="/dashboard" />;

  return (
    <div >
        <h1 className="text-center" className="text">{service.name}</h1>
        <p className="text-center">{service.subtitle}</p>
        <p className="text-center">{service.image}</p>
        <p className="text-center"><ServiceUpdateModal oldService={service} /></p>
        <p className="text-center"><Button onClick={handleDelete} variant="danger">
            DELETE
          </Button></p>
    </div>
      //   <Col className="col-lg-4 mx-auto">
      //   <Card>
      //     <Card.Img variant="top" src={service.image} alt={service.name} />
      //     <Card.Body>
      //       <Card.Title>{service.name}</Card.Title>
      //       {/* <Card.Img>{service.image} </Card.Img> */}
      //       <Card.Text>{service.description}</Card.Text>
      //       <Button variant="secondary" onClick={handleDelete} variant="danger">
      //           DELETE
      //         </Button>
      //       <ServiceUpdateModal oldService={service} />
      //     </Card.Body>
      //   </Card>
      // </Col>
  );
}

export default observer(ServiceDetail);
