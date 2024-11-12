import React from "react";

export const ServiceList = ({ serviceList, tip }) => {
  const isService = serviceList.length > 0;
  const totalServiceCost = isService
    ? serviceList.map((item) => item.serviceCost).reduce((a, b) => (a += b))
    : 0;
  const tipPercentage = ((tip / totalServiceCost) * 100).toFixed(2);
  const totalBill = totalServiceCost + tip;
  return (
    <div className="w-full">
      <h2>Services</h2>
      <ul>
        {serviceList.map((item) => (
          <li key={item.id} className="flex justify-between w-full">
            <span>{item.serviceType}</span>
            <span className="text-grayish-cyan">{item.employee}</span>{" "}
            <span>${item.serviceCost}</span>
          </li>
        ))}
        <li className="flex justify-between w-full">
          <span>Service Amount</span>
          <span>${totalServiceCost}</span>
        </li>
        <li className="flex justify-between w-full">
          <span>Tip ({tipPercentage}%)</span>
          <span>${tip}</span>
        </li>
        <li className="flex justify-between w-full">
          <span>Total Bill</span>
          <span>${totalBill}</span>
        </li>
      </ul>
    </div>
  );
};
