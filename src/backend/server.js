const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
//about express https://medium.com/@aofleejay/สร้าง-restful-api-ด้วย-express-express-101-ee37cc4952b4
//about mysql https://medium.com/@redduckok/node-js-mysql-มาแล้วครับ-55875095ce91

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//อย่าลืมแก้ user password database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "testdb"
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

//GET /activities ส่งกลับข้อมูลกิจกรรมทั้งหมดที่มี
app.get("/activities", (req, res) => {
  res.send("All activities");
});

//GET /activities/:id ส่งกลับข้อมูล activity ที่ตรงกับ id
app.get("/activities/:id", (req, res) => {
  res.send("Activities id" + req.params.id);
});

//POST /activities สร้าง activity ใหม่
app.post("/activities", (req, res) => {
  res.send("Create activities");
});

//PUT /activities/:id เพื่อแก้ไขข้อมูล activity ที่ตรงกับ id
app.put("/activities/:id", (req, res) => {
  res.send("Update activities id" + req.params.id);
});

//DELETE /activities/:id เพื่อลบ activity ที่ตรงกับ id
app.delete("/activities/:id", (req, res) => {
  res.send("Delete activities id" + req.params.id);
});

app.listen(3000, () => {
  console.log("Start server at port 3000.");
  con.connect(err => {
    if (err) throw err;
    console.log("Connected");
  });
});
