const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors = require("cors");

dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connection successful"))
.catch((err) => (err));


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/movies", movieRoute)
app.use("/api/lists", listRoute)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Backend server running on port: ${port}`)
})
