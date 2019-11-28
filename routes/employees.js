const express = require("express");
const router = express();
const mysql = require("mysql");
router.use(express.json());
const connection = mysql.createConnection({
    host: "localhost",
    database: "dac_2019",
    user: "dac-2019",
    password: "dac-2019",
    port: 3306
})
connection.connect();

router.get("/", (request, response)=>{
   
    const statement = "select * from employee";
   
    connection.query(statement, (err, data)=>{
     if(err == null)
     {
         response.send(JSON.stringify(data));
     }
     else
     {
         response.send(JSON.stringify(err));
     }
    })
})

router.post("/", (request, response)=>{
   
   const{name, address, email} = request.body;
    const statement = `insert into employee(name, address, email) values('${name}', '${address}', '${email}')`
    connection.query(statement, (err, data)=>{
     if(err == null)
     {
         response.send(JSON.stringify(data));
     }
     else
     {
         response.send(JSON.stringify(err));
     }
    })
})

router.put("/:id", (request, response)=>{
    const id = request.params.id
    const{name, address, email} = request.body;
     const statement = `update employee set name='${name}', address='${address}', email='${email}' where id= ${id}`;
     connection.query(statement, (err, data)=>{
      if(err == null)
      {
          response.send(JSON.stringify(data));
          console.log("update Successfull")
      }
      else
      {
          response.send(JSON.stringify(err));
      }
     })
 })

 router.delete("/:id", (request, response)=>{
   
    const id = request.params.id
    const{name, address, email} = request.body;
     const statement = `delete from employee where id= ${id}`
     connection.query(statement, (err, data)=>{
      if(err == null)
      {
         console.log("delete Successfull")
      }
      else
      {
          response.send(JSON.stringify(err));
      }
     })
 })

module.exports = router;

