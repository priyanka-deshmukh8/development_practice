const  express = require("express");
const { userRouter } = require("./routes/user");
const { createUserRoutes } = require("./routes/course");

const app = express();

app.use(express.json());   

createUserRoutes(app);
createCourseRoutes(app);    

app.listen(3000);