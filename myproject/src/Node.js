const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json()); // Parse JSON data

// API endpoint to save data
app.post("/save-patient", (req, res) => {
  const patient = req.body;

  // Define the file path (C:\ drive)
  const filePath = path.join("C:\\", `Patient_${patient.name}.txt`);

  // Create the file content
  const fileContent = `
    نام: ${patient.name}
    والد/سرپرست کا نام: ${patient.fatherGuardianName}
    عمر: ${patient.age}
    جنس: ${patient.gender}
    وزن: ${patient.weight}
    خون کا گروپ: ${patient.bloodGroup}
    ازدواجی حیثیت: ${patient.maritalStatus}
    ملاقات کا نمبر: ${patient.appointmentNumber}
    ایکس ریز کے نتائج: ${patient.xrays}
    ٹیسٹ رپورٹ: ${patient.testReport}
    تفصیل: ${patient.description}
    شہر: ${patient.city}
    پتہ: ${patient.address}
    رابطہ: ${patient.contactDetails}
    ایمرجنسی رابطہ: ${patient.emergencyContacts}
    ای میل: ${patient.email}
  `;

  // Write the file
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).json({ message: "Failed to save file" });
    }
    res.status(200).json({ message: "File saved successfully" });
  });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
