var express=require("express");
var bodyParser=require("body-parser");
var path=require("path");

var app = express();
var port=8080;

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

// require("./app/routing/apiRoutes")(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

app.listen(port, function(){
    console.log('appListening on port' + port);
});
