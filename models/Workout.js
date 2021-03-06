const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: {
        type: Array,
    },
    day: {
        type: Date,
        default: Date.now,
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
