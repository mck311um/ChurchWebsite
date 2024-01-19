import React from "react";
import { donateMethods } from "../components/donateCard/DonateMethods";
import DonateCard from "../components/donateCard/DonateCard";

const Donate = () => {
  return (
    <div>
      {donateMethods.map((el) => {
        return (
          <DonateCard
            key={el.method}
            method={el.method}
            details={el.details}
          ></DonateCard>
        );
      })}
    </div>
  );
};

export default Donate;
