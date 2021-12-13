import { observer } from "mobx-react";
import React from "react";
import ServiceDetailItem from "./ServiceDetailItem";

function ServiceDetailList({ options }) {
  const optionList = options.map((option) => (
    <ServiceDetailItem key={option._id} detail={option} />
  ));

  return <div>{optionList}</div>;
}

export default observer(ServiceDetailList);

// import { observer } from "mobx-react";
// import React from "react";
// import optionStore from "../../stores/optionStore";
// import ServiceDetailItem from "./ServiceDetailItem";

// function ServiceDetailList() {
//   const optionList = optionStore.options.map((option) => (
//     <ServiceDetailItem key={option._id} detail={option} />
//   ));

//   return <div>{optionList}</div>;
// }

// export default observer(ServiceDetailList);
