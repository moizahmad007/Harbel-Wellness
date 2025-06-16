import React, { useState } from "react";
import Harbal from "./assets/harbal.webp";
import "./Product.css"; // Import the CSS for styling

const products = [
  {
    id: 1,
    name: "Herbal Medicine 1",
    description: "A natural herbal medicine for health.",
    price: "$50.00",
    imageUrl: Harbal
  },
  {
    id: 2,
    name: "Herbal Medicine 2",
    description: "Another excellent herbal solution for wellness.",
    price: "$35.00",
    imageUrl: Harbal
  },
  {
    id: 3,
    name: "Herbal Medicine 3",
    description: "Perfect for boosting your immune system.",
    price: "$60.00",
    imageUrl: Harbal
  },
  // More products here...
];

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    address: "",
  });

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handlePayNowClick = () => {
    setIsPaymentFormVisible(true);
  };

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
    <div className="product-container">
      <h5 className="product-title">Madni Herbal Laboratory</h5>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>

              {/* Quantity selector */}
              <div className="quantity-container">
                <label htmlFor={`quantity-${product.id}`}>Quantity: </label>
                <input
                  type="number"
                  id={`quantity-${product.id}`}
                  value={quantity}
                  min="1"
                  onChange={handleQuantityChange}
                  className="quantity-input"
                />
              </div>

              {/* Description toggle */}
              <button onClick={toggleDescription} className="description-btn">
                {showDescription ? "Hide Description" : "Show Description"}
              </button>
              {showDescription && <p className="product-description">{product.description}</p>}

              {/* Add to Cart button */}
              <button className="add-to-cart-btn">Add to Cart</button>

              {/* Pay Now button */}
              <button onClick={handlePayNowClick} className="pay-btn">Buy Now</button>

              {/* Payment form (conditionally shown) */}
              {isPaymentFormVisible && (
                <form onSubmit={handleSubmit} className="payment-form">
                  <h3>Enter Payment Details</h3>
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
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
