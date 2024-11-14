import React from "react";
import { useState } from "react";
import { ServiceList } from "./ServiceList";
import { ResultPanel } from "./ResultPanel";
import { FormAddService } from "./FormAddService";
import { FormAddTip } from "./FormAddTip";

export const TipCalculator = () => {
  const [serviceList, setServiceList] = useState([]);
  const [tip, setTip] = useState("");
  const tipPercentage =
    serviceList.length > 0
      ? tip /
        serviceList.map((item) => item.serviceCost).reduce((a, b) => (a += b))
      : 0;

  function handleAddService(service) {
    setServiceList([...serviceList, service]);
  }
  function handleAddTip(t) {
    setTip(t);
  }

  function handleSplit() {
    setServiceList(
      serviceList.map((service) => ({
        ...service,
        tipAmount: (service.serviceCost * tipPercentage).toFixed(2),
      }))
    );
  }

  function handleReset() {
    setServiceList([]);
    setTip("");
  }

  return (
    <div className="bg-white md:w-[920px] gap-[48px] rounded-lg flex flex-col md:flex-row lg:flex-row justify-between p-[32px]  mt-8">
      <div className="w-full">
        {serviceList.length > 0 ? (
          <>
            <ServiceList serviceList={serviceList} tip={tip} />
          </>
        ) : (
          <p>Your services will appear here.</p>
        )}

        <FormAddService onAddService={handleAddService} />
        <FormAddTip onAddTip={handleAddTip} />
      </div>
      <div>
        <ResultPanel serviceList={serviceList} onSplit={handleSplit} />
        <button
          className="bg-primary p-[9px] grid-cols-subgrid col-span-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
