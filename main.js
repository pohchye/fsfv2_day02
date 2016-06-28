/**
 * Created by pohchye on 28/6/2016.
 */

//Load Express - look inside node_modules for the module
var express = require("express");

// Create an instance of express app
var app = express();

// --- Start of request processing ---

app.use(function (req, res, next) {
    console.info("incoming request: %s", req.originalUrl);
    next();
});

// Serve static files from public
app.use(express.static(__dirname + "/public"));
// Serve files from another directory bower_components
app.use(express.static(__dirname + "/bower_components"));
// Middleware is a function that handles or process request
app.use(function (req, res) {
    console.info("Fle not found in public");
    res.redirect("/error.html");
});

// Set node port
// Check for 1st argument, environment variable and then hard code port
app.set("port",
    process.argv[2] || process.env.APP_PORT || 3000);

//Start server on port
app.listen(app.get("port"), function(){
        console.info("Webserver started on port %d", app.get("port"))
    }
);



