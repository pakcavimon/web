const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const db = require('./db');  // เชื่อมโยง db.js กับ index.js

const app = express();
const port = 3000;

app.use(express.json());  // Middleware สำหรับรับข้อมูล JSON

// เส้นทางหน้าแรก (root route)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // ส่งไฟล์ index.html
});


// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
