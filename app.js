const mongoose = require("mongoose");
const experss = require("express");
const app = experss();
const cors = require("cors");

mongoose
  .connect("mongodb://127.0.0.1:27017/erpApp")
  .then(console.log("Successfully connected to Database"))
  .catch((err) => console.log(err));

app.use(experss.json());
app.use(cors());

const erpRouter = require("./router/erprouter");
app.use("/erp", erpRouter);

const loginController = require("./controller/logincontroller");
app.post("/login", loginController.login);

const detailRouter = require('./router/detailsRouter')
app.use('/details', detailRouter)

const userRouter = require("./router/userrouter");
app.use("/user", userRouter);

const attendencedRouter = require("./router/attendencedsheetRouter");
app.use("/attendenced", attendencedRouter);

const complaintRouter = require("./router/ComplaintRouter");
app.use("/complaint",  complaintRouter);

const leaveRouter = require("./router/leaveRouter");
app.use("/leave",  leaveRouter);

const salaryRouter = require("./router/salaryRouter");
app.use("/salary",  salaryRouter);

const salaryslipRouter = require("./router/salaryslipRouter");
app.use("/salaryslip",  salaryslipRouter);

const feedbackRouter = require("./router/feedbackRoute");
app.use("/feedback", feedbackRouter);

const verifyRouter = require("./router/verifyRouter");
app.use("/verify", verifyRouter);

app.listen(8080, () => {
  console.log("server running");
});
