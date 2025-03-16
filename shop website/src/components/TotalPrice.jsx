import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./TotalPrice.css";

const TotalPrice = ({ totalPrice }) => {
  const [visible, setVisible] = useState(true);

  if (totalPrice === 0) return null;

  return (
    <Alert variant="info" className={`total-price-alert ${visible ? "" : "hidden"}`}>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Total Price: ${totalPrice}</h2>
        <Button variant="outline-dark" size="sm" onClick={() => setVisible(false)}>
          ✖
        </Button>
      </div>
    </Alert>
  );
};

export default TotalPrice;
