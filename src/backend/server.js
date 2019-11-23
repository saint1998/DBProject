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
  password: "password",
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
    let sql = "SELECT * FROM EMPLOYEE;";
    con.query(sql, (err, result) => {
      if (err) throw err;
      let respond = JSON.stringify(result);
      console.log(result);
      res.send(respond);
    });
    con.end();
  });
});

//GET /dormitory/:id/employees ส่งกลับข้อมูล employee ที่ตรงกับ dorm id
app.get("/dormitory/:id/employees", (req, res) => {
  res.send(`employees id ${req.params.id}`);
});

//POST /employees สร้าง employee ใหม่
app.post("/employees", (req, res) => {
  //เวลา front ส่งมา จะส่งมาเป็น json โดยข้อมูลจะอยู่ใน req.body สมมติว่าใน body เป็น {"name":"test"} req.body.name ก็คือ test
  //test merge
  console.log(req.body.name);
  res.send("Create employees");
});

//PUT /employees/:id เพื่อแก้ไขข้อมูล employee ที่ตรงกับ id
app.put("/employees/:id", (req, res) => {
  con.connect(err => {
    if (err) throw err;
    console.log("Connected!");
    let emp = req.body;
    console.log(emp);
    console.log(`employee name : ${emp.First_name}`);
    let sql = `UPDATE EMPLOYEE SET Position = "${emp.Position}", \
                                    Dormitory_id = "${emp.Dormitory_id}" \
                                WHERE Ssn = ${req.params.id};` ;
      console.log(sql);
      con.query(sql, (err, result) => {
      if (err) throw err;
      //let respond = JSON.stringify(result);
      console.log(result);
      res.send(`Employee ${req.params.id} is Updated`);
    });
    con.end();
  });
});

//DELETE /employees/:id เพื่อลบ employee ที่ตรงกับ id
app.delete("/employees/:id", (req, res) => {
  con.connect(err => {
    if (err) throw err;
    console.log("Connected!");
    let sql = "DELETE FROM EMPLOYEE WHERE Ssn = " + req.params.id;
    con.query(sql, (err, result) => {
      if (err) throw err;
      //let respond = JSON.stringify(result);
      console.log(result);
      res.send('Employee ' + req.params.id + ' is Deleted');
    });
    con.end();
  });
});

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
