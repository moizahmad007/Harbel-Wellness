import React, { useState, useEffect } from "react";
import "./Registration.css";

const Registration = ({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitted,
  handleImageUpload1,
  handleImageUpload2,
  handlePageChange3,
}) => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [language, setLanguage] = useState("ur"); // Default language is Urdu

  const translations = {
    ur: {
      heading: "رجسٹریشن فارم",
      personalInfo: "ذاتی معلومات",
      name: "نام",
      placeholdername: "اپنا نام درج کریں",
      fatherGuardianName: "والد/سرپرست کا نام",
      placeholderfatherGuardianName: "اپنے والد/سرپرست کا نام درج کریں",
      age: "عمر",
      placeholderage: "اپنی عمر درج کریں",
      gender: "جنس",
      selectGender: "جنس منتخب کریں",
      placeholderselectgenter: "جنس منتخب کریں",
      male: "مرد",
      female: "خاتون",
      other: "دیگر",
      city: "شہر",
      placeholdercity: "اپنا شہر درج کریں",
      address: "پتہ",
      placeholderaddress: "اپنا پتہ درج کریں",
      profession: "پیشہ",
      placeholderprofession: "اپنا پیشہ درج کریں",
      contactDetails: "رابطہ نمبر",
      placeholdercontactDetails: "اپنا رابطہ نمبر درج کریں",
      emergencyContacts: "ایمرجنسی رابطہ نمبر (اختیاری)",
      placeholderemergencyContacts: "ایمرجنسی رابطہ نمبر درج کریں",
      email: "ای میل پتہ (اختیاری)",
      placeholderemail: "ای میل پتہ درج کریں @gmail.com",
      maritalStatus: "ازدواجی حیثیت",
      selectMaritalStatus: "ازدواجی حیثیت منتخب کریں",
      single: "کنوارہ",
      married: "شادی شدہ",
      divorced: "طلاق یافتہ",
      bloodGroup: "بلڈ گروپ",
      selectBloodGroup: "بلڈ گروپ منتخب کریں",
      weight: "وزن",
      placeholderweight: "اپنا وزن درج کریں",
      appointmentNumber: "ملاقات نمبر",
      placeholderappointmentNumber: "اپنا ملاقات نمبر درج کریں",
      xrays: "ایکسرے",
      placeholderxrays: "اپنے ایکسرے کے مسئلے کا اندراج کریں",
      UploadXRayImage: "  ایکسرے امیج اپلوڈ کریں",
      testreport: "رپورٹ کے نتائج درج کریں",
      placeholdertestreport: "ٹیسٹ رپورٹ/نتائج درج کریں",
      UploadReportImage:"  رپورٹ امیج اپلوڈ کریں",
      description: "تفصیل",
      placeholderdescription: "اپنے مسائل درج کریں",
      submit: "جمع کرائیں",
      cancel: "منسوخ کریں",
      back:"واپس جائیں",
      registrationSuccess: "رجسٹریشن کامیاب",
    },
    
    en: {
      heading: "Registration Form",
      personalInfo: "Personal Information",
      name: "Name",
      placeholdername:"Enter Your Name",
      fatherGuardianName: "Father/Guardian Name",
      placeholderfatherGuardianName: "Enter Your Father/Guardian Name",
      age: "Age",
      placeholderage:"Enter Your Age",
      gender: "Gender",
      selectGender: "Select Gender",
      placeholderselectgenter:"Select the Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      city: "City",
      placeholdercity: "Enter Your City",
      address: "Address",
      placeholderaddress: "Enter Your Address",
      profession: "Profession",
      placeholderprofession: "Enter Your Profession",
      contactDetails: "Contact Number",
      placeholdercontactDetails: "Enter Your Contact Number",
      emergencyContacts: "Emergency Contact (Optional)",
      placeholderemergencyContacts: "Enter Your Emergency Contact Number",
      email: "Email Address (Optional)",
      placeholderemail: "Enter Email Address @gmail.com ",
      maritalStatus: "Marital Status",
      selectMaritalStatus: "Select Marital Status",
      single: "Single",
      married: "Married",
      divorced: "Divorced",
      bloodGroup: "Blood Group",
      selectBloodGroup: "Select Blood Group",
      weight: "Weight",
      placeholderweight: "Enter Your Weight",
      appointmentNumber: "Appointment Number",
      placeholderappointmentNumber: "Enter Your Appointment Number",
      xrays: "X-Ray",
      placeholderxrays: "Enter Your X-Ray Problem",
      UploadXRayImage: "Upload X-Ray Image",
      testreport: "Enter the Test Report Results",
      placeholdertestreport: "Enter Test Report/Result",
      UploadReportImage:"Upload Report Image",
      description: "Description",
      placeholderdescription: "Enter your Problems/",
      submit: "Submit",
      cancel: "Cancel",
      back:"Go Back",
      registrationSuccess: "Registration Successful",
    },
  };

  const t = translations[language];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setCurrentDateTime(now.toLocaleString(language === "ur" ? "ur-PK" : "en-US", options));
    }, 1000);

    return () => clearInterval(interval);
  }, [language]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="registration-page" data-language={language}>
      <div className="language-selector">
        <label>
          {language === "ur" ? "زبان منتخب کریں" : "Select Language"}
          <select value={language} onChange={handleLanguageChange}>
            <option value="ur">اردو</option>
            <option value="en">English</option>
          </select>
        </label>
      </div>
      <h2>{t.heading}</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="time">
            <h3>{t.personalInfo}</h3>
            <p>{currentDateTime}</p>
          </div>
          {/* Form Fields */}
          <label>
            {t.name}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t.placeholdername}
              required
            />
          </label>
          <label>
            {t.fatherGuardianName}
            <input
              type="text"
              name="fatherGuardianName"
              value={formData.fatherGuardianName}
              onChange={handleInputChange}
              placeholder={t.placeholderfatherGuardianName}
              required
            />
          </label>
          <label>
            {t.age}
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder={t.placeholderage}
              required
            />
            </label>
          <label>
            {t.gender}
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">{t.selectGender}</option>
              <option value="Male">{t.male}</option>
              <option value="Female">{t.female}</option>
              <option value="Other">{t.other}</option>
            </select>
          </label>

          <label>
            {t.city}
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder={t.placeholdercity}
              required
            />
          </label>
          <label>
            {t.address}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder={t.placeholderaddress}
              required
            />
          </label>
          <label>
            {t.profession}
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              placeholder={t.placeholderprofession}
              required
            />
          </label>
          <label>
            {t.contactDetails}
            <input
              type="text"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleInputChange}
              placeholder={t.placeholdercontactDetails}
              required
            />
          </label>
          <label>
            {t.emergencyContacts}
            <input
              type="text"
              name="emergencyContacts"
              value={formData.emergencyContacts}
              onChange={handleInputChange}
              placeholder={t.placeholderemergencyContacts}
            />
          </label>
          <label>
            {t.email}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t.placeholderemail}
            />
          </label>
          <label>
            {t.maritalStatus}
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              required
            >
              <option value="">{t.selectMaritalStatus}</option>
              <option value="single">{t.single}</option>
              <option value="married">{t.married}</option>
              <option value="divorced">{t.divorced}</option>
            </select>
          </label>
          <label>
            {t.bloodGroup}
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              required
            >
              <option value="">{t.selectBloodGroup}</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </label>
          <label>
            {t.weight}
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder={t.placeholderweight}
              required
            />
          </label>
          <label>
            {t.appointmentNumber}
            <input
              type="number"
              name="appointmentNumber"
              value={formData.appointmentNumber}
              onChange={handleInputChange}
              placeholder={t.placeholderappointmentNumber}
              required
            />
          </label>
          <label>
            {t.xrays}
            <input
              type="text"
              name="xrays"
              value={formData.xrays}
              onChange={handleInputChange}
              placeholder={t.placeholderxrays}
            />
            <div>
              <input
                type="file"
                name="xraysFile"
                onChange={handleImageUpload1}
                accept="image/*"
                style={{ marginTop: '10px', textAlign:'right' }}
              />
              <button
                type="button"onClick={() => alert("The X-ray image upload facility can be provided here")}
                style={{
                  textAlign:'right',
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              >
                {t.UploadXRayImage}
              </button>
            </div>
          </label>
          <label>
            {t.testreport}
            <input
              type="text"
              name="testreport"
              value={formData.testreport}
              onChange={handleInputChange}
              placeholder={t.placeholdertestreport}
            />
            <div>
              <input
                type="file"
                name="testreportFile"
                onChange={handleImageUpload2}
                accept="image/*"
                style={{ marginTop: '10px', textAlign:'right' }}
              />
              <button
                type="button"
                onClick={() => alert("The report image upload facility can be provided here")}
                style={{
                  textAlign:'right',
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              >
                {t.UploadReportImage}
              </button>
            </div>
          </label>
          <label>
        {t.description}
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder={t.placeholderdescription}
              required
            />
          </label>
          {/* Add other fields as per your code */}
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {t.submit}
            </button>
            <button type="button" onClick={() => handlePageChange3("home")} className="back-btn">
  {t.cancel}
</button>

          </div>
        </form>
      ) : (
        <div className="submitted-data">
          <h2>{t.registrationSuccess}</h2>
          <button onClick={handlePageChange3} className="back-btn">
            {t.back}
          </button>
        </div>
      )}
    </div>
  );
};

export default Registration;
