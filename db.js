const mongoose = require('mongoose');
var mongoURL = 'mongodb+srv://noosi4567:1234@cluster0.js2lb.mongodb.net/mern-rooms';

// เชื่อมต่อกับ MongoDB โดยไม่ใช้ตัวเลือกที่ไม่แนะนำ
mongoose.connect(mongoURL); // ลบตัวเลือกที่ไม่แนะนำ

var connection = mongoose.connection;

// เมื่อมีข้อผิดพลาดในการเชื่อมต่อ
connection.on('error', () => {
    console.log('MongoDB Connection failed');
});

// เมื่อเชื่อมต่อสำเร็จ
connection.on('connected', () => {
    console.log('MongoDB Connection Successful');
});

module.exports = mongoose;
