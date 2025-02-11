const mysql = require('mysql2');

// เชื่อมต่อกับฐานข้อมูล MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // รหัสผ่าน MySQL
  database: 'netflix_db' // ชื่อฐานข้อมูล
});

module.exports = db;  // ส่ง db ไปใช้ในไฟล์อื่นๆ
