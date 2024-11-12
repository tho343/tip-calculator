import React from "react";
import { useState } from "react";
import { ServiceList } from "./ServiceList";
import { TotalBill } from "./TotalBill";
import { ResultPanel } from "./ResultPanel";
import { FormAddService } from "./FormAddService";
import { FormAddTip } from "./FormAddTip";

export const TipCalculator = () => {
  const [serviceList, setServiceList] = useState([]);
  const [tip, setTip] = useState(0);
  function handleAddService(service) {
    setServiceList([...serviceList, service]);
  }
  function handleAddTip(t) {
    setTip(t);
  }
  return (
    <div className="bg-white w-[920px] gap-[48px] rounded-lg flex justify-between p-[32px]">
      <div className="w-full">
        {serviceList.length > 0 ? (
          <>
            {" "}
            <ServiceList serviceList={serviceList} tip={tip} />
          </>
        ) : (
          <p>Your services will appear here.</p>
        )}

        <FormAddService onAddService={handleAddService} />
        <FormAddTip onAddTip={handleAddTip} />
      </div>
      <ResultPanel serviceList={serviceList} />
    </div>
  );
};
