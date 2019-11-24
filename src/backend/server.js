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
  database: "dorm"
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

//GET /employees ส่งกลับข้อมูล employee ทั้งหมดที่มี
app.get("/employees", (req, res) => {
  con.connect(err => {
    if (err) throw err;
    console.log("Connected!");
    let sql = "SELECT * FROM EMPLOYEE";
    con.query(sql, (err, result) => {
      if (err) throw err;
      let response = JSON.stringify(result);
      console.log(result);
      res.send(respond);
    });
    con.end();
  });
});

//GET /dormitory/:id/employees ส่งกลับข้อมูล employee ที่ตรงกับ dorm id
app.get("/dormitories/:id/employees", (req, res) => {
  con.connect(err => {
    if (err) throw err;
    console.log("Connected!");
    let sql =
      "SELECT * FROM EMPLOYEE  USE INDEX(em_dorm) WHERE Dormitory_id = " +
      req.params.id;
    con.query(sql, (err, result) => {
      if (err) throw err;
      let response = JSON.stringify(result);
      console.log(result);
      res.send(response);
    });
    con.end();
  });
});

//POST /employees สร้าง employee ใหม่
app.post("/employees", (req, res) => {
  //เวลา front ส่งมา จะส่งมาเป็น json โดยข้อมูลจะอยู่ใน req.body สมมติว่าใน body เป็น {"name":"test"} req.body.name ก็คือ test
  //test merge
  con.connect(err => {
    if (err) throw err;
    let sql = `insert into EMPLOYEE (Ssn, First_name, Last_name, Position, Phone_number,Birthdate,Address,Start_date,Dormitory_id) values ("${req.body.Ssn}","${req.body.First_name}","${req.body.Last_name}", "${req.body.Position}", "${req.body.Phone_number}", "${req.body.Birthdate}", "${req.body.Address}", "${req.body.Start_date}","${req.body.Dormitory_id}")`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      let response = JSON.stringify(result);
      console.log(req.body.name);
      res.send("Create employees");
      //con.end();
    });
    con.end();
  });
});

//PUT /employees/:id เพื่อแก้ไขข้อมูล employee ที่ตรงกับ id
app.put("/employees/:id", (req, res) => {
  res.send(`Update employees id ${req.params.id}`);
});

//DELETE /employees/:id เพื่อลบ employee ที่ตรงกับ id
app.delete("/employees/:id", (req, res) => {
  res.send(`Delete employees id ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
