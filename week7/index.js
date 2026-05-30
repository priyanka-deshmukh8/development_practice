const express = require('express');
const { UserModel, TodoModel } = require('./db');
const jwt = require('jsonwebtoken');

const app = express();  

app.use(express.json());

app.post("/signup", function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    UserModel.insert({
        name: name,
        password: password,
        email: email
    })
    res.json({
        message: "You are signed up!"
    });
});

app.post("/login", function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const user = UserModel.findOne({
        email: email,
        password: password 
    });
    if (user) {
        const token = jwt.sign({
            id: user.id,
            email: user.email
        }, "secret");
        res.json({
            message: "You are logged in!",
            token: token
        });
    } else {
        res.json({
            message: "Invalid email or password"
        });
    }
});
app.listen(3000);