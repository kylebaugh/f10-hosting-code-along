const express = require('express') 
const path = require('path') // path allows Heroku to know how to interact with our file directory

const app = express() // defines our app variable and sets it to the invocation of express

// Note: We don't have an express.json on this project, because we aren't passing data between the frontend/backend

app.get("/", function(req, res) { 
    res.sendFile(path.join(__dirname, "../index.html")) 
})
// The "/" signifies the endpoint for the main page of our application
// res.sendFile sending the filepath that Heroku will use to get to our application
// path.join allows Heroku to start in this current page (__dirname) and join it with our index.html (which is what will actually be displayed on Heroku)

const port = process.env.PORT || 4567
// process.env.PORT is the dot notation syntax for accessing the port Heroku will be using when running our application
// We can use OR "||" to specify which port to run locally. Basically, it will look for the process.env.PORT first, and if that doesn't exist, it will use the port we chose.

app.listen(port, () => console.log(`Take us to warp ${port}`))
// This listens for the specified port and console logs the result