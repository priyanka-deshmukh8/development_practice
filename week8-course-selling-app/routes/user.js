function createUserRoutes(app) {
    app.post("/signup", function (req, res) {
        res.json({message: "SignUp endpoint"
        });
    })

    app.post("/signin", function (req, res) {
        res.json({message: "SignIn endpoint"
        });
    })

    app.get("/purchases", function (req, res) {
        res.json({message: "Purchases endpoint"
        });
    })
}

module.exports = {
    userRouter : userRouter
}