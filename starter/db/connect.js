 const mongoose = require("mongoose")
 
 const connectDB = (url)=>{ 
    return mongoose.connect(url)
 }

module.exports = connectDB;

/*
Schema - defines the structure of the documents(i.e. data types and other such constraints)

Model - is a wrapper for the schema the provides interface for interacting with the database (performing crud operations)
- model represents a collection in a database and gives you method to perform crud operations.
n
Model is looking for two things one is name another is the schema.

Document - document is the instance of our model
*/