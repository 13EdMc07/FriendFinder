let tableData = require("../data/friends");

module.exports = (app) => {
    
    app.get("/api/friends", (req,res) => {
        // Send back all data 
        res.json(tableData);
    });

    app.get("/api/friends/deleteAll", (req,res) => {
        // Delete all data
        tableData = [];
        console.log("Deleting all data");
        res.json(tableData);
    });

    app.post("/api/friends", (req, res) => {
        // Create a new friend
        // req is going to contain all the information regarding the new friend
        console.log("You are trying to create a new friend");
        tableData.push(req.body);
        res.json(true);
    });


}