import React, { useState } from "react";
const employees = ["Tran", "Kathy", "Sandy", "Ivy", "Cindy", "Kim", "Rose"];

export const FormAddService = ({ onAddService }) => {
  const [employee, setEmployee] = useState("");
  const [serviceCost, setServiceCost] = useState("");
  const [serviceType, setServiceType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!employee || !serviceCost || !serviceType) return;
    const newService = {
      id: crypto.randomUUID(),
      employee,
      serviceCost,
      serviceType,
      tip: 0,
    };
    onAddService(newService);
    setEmployee("");
    setServiceCost("");
    setServiceType("");
  }
  return (
    <div className="p-5 bg-light-grayish-cyan rounded-lg mt-5">
      <h3>Add Service</h3>

      <form className="mt-2 grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
        <select
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          className="bg-very-light-grayish-cyan py-[6px] px-[17px]"
        >
          <option>Select employee</option>
          {employees.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="bg-very-light-grayish-cyan py-[6px] px-[17px]"
        >
          <option>Select Service</option>
          <option value="pedicure">Pedicure</option>
          <option value="manicure">Manicure</option>
        </select>

        <input
          className="bg-very-light-grayish-cyan py-[6px] px-[17px] flex justify-between"
          type="number"
          placeholder="Enter Amount"
          value={serviceCost}
          onChange={(e) => setServiceCost(Number(e.target.value))}
        ></input>

        <button className="bg-primary p-[9px] grid-cols-subgrid col-span-2">
          Add
        </button>
      </form>
    </div>
  );
};
