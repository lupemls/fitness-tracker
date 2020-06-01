const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


//API ROUTES
app.get("/api/workouts", (req,res) => {
    db.Workout.find({})
        .then(data => {
            console.log(data);
            res.send(data);
        });
});

app.post("/api/workouts", (req,res) => {
    db.Workout.create({db})
        .then(data => {
            console.log(data);
            res.send(data);
        });
});
app.get("/api/workouts/range", (req,res) => {
    db.Workout.find({})
        .then(data => {
            console.log(data);
            res.send(data);
        });
});
app.get("/api/workouts/:id")

//=============================================

//HTML ROUTES
app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
