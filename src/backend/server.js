const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
//about express https://medium.com/@aofleejay/สร้าง-restful-api-ด้วย-express-express-101-ee37cc4952b4
//about mysql https://medium.com/@redduckok/node-js-mysql-มาแล้วครับ-55875095ce91

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//อย่าลืมแก้ user password database
const pool = mysql.createPool({
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
  pool.getConnection((err, con) => {
    if (err) throw err;
    console.log("Connected!");
    let sql = "SELECT * FROM EMPLOYEE";
    con.query(sql, (err, result) => {
      if (err) throw err;
      let response = JSON.stringify(result);
      console.log(result);
      res.send(response);
    });
    con.release();
  });
});

app.get("/dormitories", (req, res) => {
  pool.getConnection((err, con) => {
    if (err) throw err;
    console.log("Connected!");
    let sql = "SELECT * FROM DORMITORY";
    con.query(sql, (err, result) => {
      if (err) throw err;
      let response = JSON.stringify(result);
      console.log(result);
      res.send(response);
    });
    con.release();
  });
});

//GET /dormitory/:id/employees ส่งกลับข้อมูล employee ที่ตรงกับ dorm id
app.get("/dormitories/:id/employees", (req, res) => {
  pool.getConnection((err, con) => {
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
    con.release();
  });
});

//POST /employees สร้าง employee ใหม่
app.post("/employees", (req, res) => {
  //เวลา front ส่งมา จะส่งมาเป็น json โดยข้อมูลจะอยู่ใน req.body สมมติว่าใน body เป็น {"name":"test"} req.body.name ก็คือ test
  //test merge
  pool.getConnection((err, con) => {
    if (err) console.log(err);
    let sql = `insert into EMPLOYEE (Ssn, First_name, Last_name, Position, Phone_number,Birthdate,Address,Start_date,Dormitory_id) values ("${req.body.Ssn}","${req.body.First_name}","${req.body.Last_name}", "${req.body.Position}", "${req.body.Phone_number}", "${req.body.Birthdate}", "${req.body.Address}", "${req.body.Start_date}","${req.body.Dormitory_id}")`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      let response = JSON.stringify(result);
      res.send("Create employees");
    });
    con.release();
  });
});

//PUT /employees/:id เพื่อแก้ไขข้อมูล employee ที่ตรงกับ id
app.put("/employees/:id", (req, res) => {
  pool.getConnection((err, con) => {
    if (err) throw err;
    console.log("Connected!");
    let emp = req.body;
    console.log(emp);
    let sql = `UPDATE EMPLOYEE SET Position = "${emp.Position}",Dormitory_id = "${emp.Dormitory_id}"WHERE Ssn = "${req.params.id}";`;
    console.log(sql);
    con.query(sql, (err, result) => {
      if (err) return res.status(400).send("Cannot update");
      console.log(result);
      res.send(`Employee ${req.params.id} is Updated`);
    });
    con.release();
  });
});

//DELETE /employees/:id เพื่อลบ employee ที่ตรงกับ id
app.delete("/employees/:id", (req, res) => {
  pool.getConnection((err, con) => {
    if (err) throw err;
    console.log("Connected!");
    let sql = "DELETE FROM EMPLOYEE WHERE Ssn = " + req.params.id;
    con.query(sql, (err, result) => {
      if (err) throw err;
      //let respond = JSON.stringify(result);
      console.log(result);
      res.send("Employee " + req.params.id + " is Deleted");
    });
    con.release();
  });
});

app.listen(8000, () => {
  console.log("Start server at port 8000.");
});
