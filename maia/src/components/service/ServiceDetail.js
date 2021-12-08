import { observer } from "mobx-react";
import React from "react";
import { Redirect, useParams } from "react-router";
import serviceStore from "../../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import ServiceList from "./ServiceList";

function ServiceDetail({ service }) {
  const { serviceId } = useParams();
  //  REVIEW: You found the service, but you're not using it
  const serviceDetail = serviceStore.services.find(
    (service) => service._id === serviceId
  );
  if (!service) return <Redirect to="/dashboard" />;

  return <div>{service.name}</div>;
}

export default observer(ServiceDetail);
