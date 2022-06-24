const express = require("express");
//need to create web server using express function
const app = express(); // app is kind of both an object and class now.

app.use("/static", express.static("public")); // adds things to web server (http routes, handles , controllers etc) -- first parameter is http/url path, then second paramter runs something (public folder) if we hit that path.

app.listen(5555, () => {
    console.log("Listening on port 5555");
}) // web servers are listening for requests made to the application for a port.

//browser can only display html

// app.addListener()