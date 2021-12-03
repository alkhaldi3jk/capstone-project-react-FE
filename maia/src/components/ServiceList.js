import React from "react";
import serviceStore from "../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import { observer } from "mobx-react";

function ServiceList() {
  const serviceList = serviceStore.services.map((service) => (
    <ServiceItem service={service} key={service._id} />
  ));
  return <div>

      <h1>{services.name}</h1>
      <h1>{serviceList}</h1>
  </div>;
}

export default observer(ServiceList);
