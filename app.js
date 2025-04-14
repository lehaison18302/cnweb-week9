const express = require("express");
const dotenv = require('dotenv')
const app = express();
const cors = require('cors')

app.use(cors({
    origin: '*', // hoặc cụ thể hơn là: 'https://your-firebase-site.web.app'
  }));
//middleware
app.use(express.json());

const studentRouter = require("./routes/StudentRoutes");
app.use("/", studentRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = app;

const mongoose = require("mongoose");
dotenv.config();
const queryString = process.env.MONGODB_URI ||"mongodb+srv://dobalam:dobalam-it4409@it4409-cluster.qopfxuo.mongodb.net/it4409-db?retryWrites=true&w=majority&appName=it4409-cluster";
//configure mongoose
mongoose.connect(queryString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('MongoDB connection error:', err.message));