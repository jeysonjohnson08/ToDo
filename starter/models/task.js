const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is required"],
        trim : true,
        minLength : [5, "THe minimum length should be atleast 5"],
        maxLength : [10, "THe maximum length should be atleast 10"]

    },
    completed : {
        type : Boolean,
        default : false,
    },
})
 
const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;

/*
Schema - defines the structure of the documents(i.e. data types and other such constraints)

Model - is a wrapper for the schema the provides interface for interacting with the database (performing crud operations)
- model represents a collection in a database and gives you method to perform crud operations.
n
Model is looking for two things one is name another is the schema.

Document - document is the instance of our model
*/