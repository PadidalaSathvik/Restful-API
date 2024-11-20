//imports:
import express from 'express';
import bodyParser from 'body-parser';


const app=express();

//middlewares

app.use(bodyParser.json());

//middlewares

const usersData=[
    {
        "id": 1,
        "title": "Task1",
        "description": "This is a sample task 1.",
        "due_date": "2024-12-10",
        "status": "pending",
        "created_at": "2024-11-19T12:00:00Z",
        "updated_at": "2024-11-19T12:00:00Z"
        
    
    },
    {
        "id": 2,
        "title": "Task2",
        "description": "This is a sample task 2.",
        "due_date": "2024-12-01",
        "status": "pending",
        "created_at": "2024-11-19T12:00:00Z",
        "updated_at": "2024-11-19T12:00:00Z"
    },
    {
        "id": 3,
        "title": "Task3",
        "description": "This is a sample task 3.",
        "due_date": "2025-10-01",
        "status": "in_progress",
        "created_at": "2024-11-19T12:00:00Z",
        "updated_at": "2024-11-19T12:00:00Z"
    },
    {
      
        "id": 4,
        "title": "Task4",
        "description": "This is a sample task 4.",
        "due_date": "2025-02-01",
        "status": "in_progress",
        "created_at": "2024-11-19T12:00:00Z",
        "updated_at": "2024-11-19T12:00:00Z"
    },
    {
        "id": 5,
        "title": "Task5",
        "description": "This is a sample task 5.",
        "due_date": "2025-07-01",
        "status": "pending",
        "created_at": "2024-11-19T12:00:00Z",
        "updated_at": "2024-11-19T12:00:00Z"
    },
    {
        "id": 6,
        "title": "Task6",
        "description": "This is a sample task 6.",
        "due_date": "2024-12-01",
        "status": "pending",
        "created_at": "2024-11-19T12:00:00Z",
        "updated_at": "2024-11-19T12:00:00Z"
    },
   
  ];

const posts=[
    {id:1,
    des:"qewee"
    },
    {
        id:2,
        dex:"qwerf"
    }
];

const custemsData=[
  {
    "id":"1",
    "title":"task 10",
    "due_date":"21-12-2024"
  },
  {
    "id":"2",
    "title":"task 11",
    "due_date":"22-12-2024"
  },
  {
    "id":"3",
    "title":"task 12",
    "due_date":"23-12-2024"
  }
];


app.listen(3001,()=>{
    console.log("the server is up and running at http://localhost:3001/ ");
})

app.get('/',(req,res)=>{
    res.send("I'm Woring don't worry....");
});


// app.get('/users',(req,res)=>{
//     res.send(usersData);
// })

// app.get("/custemers",(req,res)=>{
//     res.send(custemsData);
// });

app.get("/posts",(req,res)=>{
    res.send(posts);
});

app.post("/custemers",(req,res)=>{
  // console.log(req.body);
  custemsData.push(req.body);
  // console.log(custemsData);
  res.send("we recieved data from client");
});

app.get("/custemers/:id",(req,res)=>{
  // console.log(req.params);

  const custemer=custemsData.find(item=>item.id===req.params.id);
  // console.log(custemer);
  if(custemer==null || custemer==undefined){
    res.status(404).send("item not found");
  }
  else{
    res.send(custemer);
  }
});

app.get("/custemers",(req,res)=>{
  if(req.query.name){
    const values=custemsData.filter(item=>item.name===req.query.name);
    if(values.length>0){
      res.send(values);
    }
    else{
      res.status(400).send("bad reqest...");
    }
  }
  else{
    res.send(custemsData);
  }
});

// app.get("/users",(req,res)=>{
//   res.send(usersData);
// });

app.get("/users/:id",(req,res)=>{
  // console.log(req.query);
  
  const userId=parseInt(req.params.id);
  const idx=usersData.findIndex(item=>item.id===userId);
  // console.log(idx);
  
  if(idx<0){
    res.status(404).send("not found...."); 
  }
  else{
    res.send(usersData[idx]);
    
  }

});

app.get("/users",(req,res)=>{
  
  

  
  if(req.query.city){
    const values=usersData.filter(item=>item.address.city===req.query.city);
    if(values.length===0){
      res.status(402).send("bad reqest...");
    }
    else{
      res.send(values);
    }
  }
  else{
    res.send(usersData);
  }
  
});

app.delete("/users/:id",(req,res)=>{
  const idx=usersData.findIndex(item=>item.id===parseInt(req.params.id));
  if(idx<0){
    res.status(404).send("Not found....");
  }
  else{
    const delItem=usersData.splice(idx,1);
    res.send(delItem);
  }
});

app.delete("/custemers/:id",(req,res)=>{
  const  idx=custemsData.findIndex(i=>i.id===req.params.id);
  // console.log(idx);
  
  if(idx<0){
    res.status(404).send("Not found");
  }
  else{
    const delItem=custemsData.splice(idx,1);
    res.send(delItem);
  }
});

app.patch("/users/:id",(req,res)=>{
  const idx=usersData.findIndex(i=>i.id===parseInt(req.params.id));
  if(idx<0){
    res.status(404).send("not found");
  }
  else{
    usersData[idx].name=req.body.name;
    usersData[idx].address.city=req.body.city;
    res.send(usersData[idx]);
  }
});
// app.put("/custemers/:id"(req,res))

app.put("/custemers",(req,res)=>{
  const idx=custemsData.findIndex(i=>i.id===req.body.id);
  // console.log(idx);
  
  if(idx<0){
    custemsData.push(req.body);
    res.send(req.body);
  }
  else{
    custemsData[idx].name=req.body.name;
    custemsData[idx].age=req.body.age;
    res.send(custemsData[idx]);
  }

});
