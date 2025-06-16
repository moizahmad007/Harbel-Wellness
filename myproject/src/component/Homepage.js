// src/component/Homepage.js
import React from "react";
import profileImage from "../profile.jpg";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>مدنی ہربل لیبارٹری</h1>
      <div className="profile-card">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h4>صاحبزادہ</h4>
          <h2>پروفیسر حکیم ملک عبدالرؤف اعوان</h2>
          <h3>چیف ایگزیکٹو آفیسر</h3>
          <h2>مدنی دواخانہ</h2>
          <h2>مدنی ہربل لیبارٹری</h2>
          <h3>پرنسپل</h3>
          <h2>داؤد یونانی میڈیکل کالج، گجرات</h2>
          <h3>پراپرائٹر</h3>
          <h2>مدنی پنسار اسٹور</h2>
          <h3>سابق لیکچرار</h3>
          <h2>مانسہرہ طبیہ کالج، مانسہرہ</h2>
          <h3>چیئرمین</h3>
          <h2>ہمدرد ویلفیئر سوسائٹی</h2>
        </div>
      </div>
      <div className="contact-info">
        <p>رابطہ: <strong>03006276133</strong></p>
        <p><strong>madniduakhana@gmail.com</strong></p>
      </div>
    </div>
  );
};

export default Homepage;
