import { observer } from "mobx-react";
import React from "react";
import { Redirect, useParams } from "react-router";
import serviceStore from "../../stores/serviceStore";
import ServiceUpdateModal from "./ServiceUpdateModal";
import { Button } from "react-bootstrap";
import ServiceDetailList from "../serviceDetail/ServiceDetailList";
import { baseURL } from "../../stores/api";

function ServiceDetail() {
  const handleDelete = () => serviceStore.deleteService(service._id);
  const { serviceId } = useParams();
  const service = serviceStore.services.find(
    (service) => service._id === serviceId
  );
  if (!service) return <Redirect to="/services" />;

  return (
    <div>
      <h1 className="text-center" className="text">
        {service.name}
      </h1>
      <p className="text-center">{service.subtitle}</p>
      {/* <p className="text-center">{baseURL + service.image}</p> */}
      <p className="text-center">
        <ServiceUpdateModal oldService={service} />
      </p>
      <p className="text-center">
        <Button onClick={handleDelete} variant="danger">
          DELETE
        </Button>
      </p>
      <ServiceDetailList options={service.option}/>
    </div>
  );
}

export default observer(ServiceDetail);
