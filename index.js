import express from "express";
import users from "./MOCK_DATA.json" assert {type: "json"};


const app = express();
const port = 8000;

app.get("/users", (req, res) => {
    //
});

// app.route("/api/users/:id").get((req, res) =>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// }).put((req, res) =>{
//     return res.json({status : "pending"});
// })

app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.get("/api/users/:id", (req, res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", (req, res) =>{
    //create user
    return res.json({status : "pending"});
});

app.patch("/api/users/:id", (req, res) =>{
    //patch user
    return res.json({status : "pending"});
});

app.delete("/api/users/:id", (req, res) =>{
    //delete user
    return res.json({status : "pending"});
});

app.listen(port, () =>
    console.log("Server started at port " + port)
);