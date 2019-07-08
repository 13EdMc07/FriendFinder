var path = require("path");

module.exports = function(app){
    app.get("/home",function (req, res){
        return (res.sendFile(path.join(__dirname, "../public/home.html")));
    });
    app.get("/",function (req, res){
        return (res.sendFile(path.join(__dirname, "../public/home.html")));
    });
    app.get("/survey",function (req, res){
        return (res.sendFile(path.join(__dirname, "../public/survey.html")));
    });
};