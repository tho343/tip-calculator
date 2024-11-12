import React from "react";
const initialData = [
  { id: 1, employeeName: "Kathy", amount: 32, serviceType: "manicure", tip: 0 },
  { id: 2, employeeName: "Tran", amount: 22, serviceType: "pedicure", tip: 0 },
];
export const ResultPanel = ({ serviceList }) => {
  console.log(serviceList);
  return (
    <div className="bg-very-dark-cyan w-[413px] h-[417px] p-7 rounded-lg">
      <h1 className="text-xl text-white">Tip amount</h1>
      <ul>
        {serviceList.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span className="text-light-grayish-cyan">{item.employee}</span>
            <span className="text-primary text-3xl">${item.tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
