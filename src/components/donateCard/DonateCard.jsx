import React from "react";

const DonateCard = (props) => {
  const { method, image, details } = props;
  return (
    <div>
      <div className="image">
        {method},{image}
      </div>
    </div>
  );
};

export default DonateCard;
