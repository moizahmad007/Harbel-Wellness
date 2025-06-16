import React, { useState } from "react";

const CheckoutPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Order confirmed for ${paymentDetails.name} at ${paymentDetails.address}`);
    // Add more logic for payment processing here
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={paymentDetails.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="address">Shipping Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={paymentDetails.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Confirm Payment</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
