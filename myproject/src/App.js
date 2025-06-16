// src/App.js
import React, { useState } from "react";
import Topbar from "./component/Topbar.js";
import Registration from "./component/Registration.js";
import LoginPage from "./component/LoginPage.js";
import Footer from "./component/Footer.js";
import profileImage from "./profile.jpg";
import "./App.css";
import Homepage from "./component/Homepage.js";
import Product from "./component/Product.js";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    fatherGuardianName: "",
    age: "",
    gender: "",
    city: "",
    address: "",
    profession: "",
    contactDetails: "",
    emergencyContacts: "",
    email: "",
    maritalStatus: "",
    bloodGroup: "",
    weight: "",
    appointmentNumber: "",
    xrays: "",
    testReport: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPatients([...patients, { ...formData, id: Date.now() }]);
    setIsSubmitted(true);
  };

  const handlePageChange1 = (page) => {
    setCurrentPage(page);
    if (page === "registration") {
      setIsSubmitted(false); // Reset the form submission state when navigating to registration
    }
  };
  const handlePageChange3 = (page) => {
    setCurrentPage(page);
  };
  

  return (
    <div className="app">
      <Topbar handlePageChange={handlePageChange} />
      <main className="main-content">
  {currentPage === "home" && (
    <div>
   <Homepage />
    </div>
  )}

        {currentPage === "registration" && !isSubmitted && (
          <Registration
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isSubmitted={isSubmitted}
            handleEdit={() => setIsSubmitted(true)}
            handlePageChange3={handlePageChange3}
          />
        )}
       {currentPage === "registration" && isSubmitted && (
  <div className="submitted-data">
    <h2>Registration Submitted</h2>
    <p>Thank you for submitting your registration.</p>
    <button onClick={() => handlePageChange1("registration")}>Back</button>
  </div>
)}
        {currentPage === "product" && (
  <div>
    <Product />
  </div>
)}
 {currentPage === "login" && (
    <div>
   <LoginPage />
    </div>
  )}

      </main>
     
      <Footer />
    </div>
  );
};

export default App;
