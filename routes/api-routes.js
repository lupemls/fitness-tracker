const db = require("../models");

module.exports = app => {
    app.get("/api/workouts", (req,res) => {
        db.Workout.find({})
            .then(data => {
                // console.log("Workouts:", data);
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            });
    });

    app.post("/api/workouts", (req,res) => {
        db.Workout.create({db})
            .then(data => {
                console.log("New Workout:", data);
                res.send(data);
            })
    });
    
    app.get("/api/workouts/range", (req,res) => {
        db.Workout.find({})
            .then(data => {
                console.log("Workout Range:", data);
                res.send(data);
            })
            .catch(err => {
                console.log(err);
            });
    });
    app.put("/api/workouts/:id", (req,res) => {
        const id = req.params.id;
        db.Workout.update(
            {
                _id: id,
            },             
            {
                $push: {
                    exercises: req.body
                }
            })
            .then(data => {
                console.log("Workout Id", data);
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            }
        );
    })
}