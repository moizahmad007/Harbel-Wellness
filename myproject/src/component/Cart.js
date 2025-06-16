import React from "react";

const Cart = () => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {/* Cart Items will be displayed here */}
      <p>Your cart is empty!</p>
      {/* Button to go to checkout */}
      <button onClick={() => window.location.href = "/checkout"}>Go to Checkout</button>
    </div>
  );
};

export default Cart;
