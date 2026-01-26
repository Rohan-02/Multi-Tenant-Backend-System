const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const authRouter = require('./routes/auth.routes');
const orderRouter = require('./routes/order.routes');
const tenentRouter = require('./routes/tenent.routes');
const userRouter = require('./routes/user.routes');

dotenv.config();
const app = express();
app.use(express.json());

// Connect to database
connectDB();

app.get("/",(req, res)=>{
    res.send("Hello World!");
    res.end();
})

app.use("/api/auth", authRouter);
app.use("/api/orders", orderRouter);
app.use("/api/user", userRouter);
app.use("/api/tenents", tenentRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
});