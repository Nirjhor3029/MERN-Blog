import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRouteHandler from "./routes/postRouteHandler.js";


const app = express();
app.use('/posts', postRouteHandler);


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors);

const connectionURL = "mongodb://127.0.0.1:27017/memories_project";
const PORT = process.env.PORT || 5000;




mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))
    })
    .catch(err => console.log(err.message));

// mongoose.set('useFindAndModify', false); //make sure that we don't get any warnings in the console // deprecated code