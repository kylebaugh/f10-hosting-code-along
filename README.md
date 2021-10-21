# run npm init -y
# run npm i express

# Create server folder
# Create index.js file in server folder

# Setup server file
    # require express
        const express = require('express') 
    # require path
        const path = require('path')
    # setup app with express invocation
        const app = express()
    # setup app.get endpoint for homepage 
        app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname, "../index.html"))
        })
    # define port variable
        const port = process.env.PORT || 4567
    # setup app.listen
        app.listen(port, () => console.log(`Take us to warp ${port}`))

# Create Procfile file in root folder
    # add web command to line 1
        web:npm start

# Adjust package.json
    # set "main" value to "server/index.js"
    # in "scripts", add a new line with the following text
        "start": "node server/index.js"

# Add a .gitignore for your node_modules/

# Add, Commit, Push changes to GitHub

# Connect to Heroku
    # Click on New and select Create new app
    # Add name to app
    # On the Deploy tab, connect your GitHub
    # Search for and select the appropriate repo
    # Click on Enable Automatic Deploys
    # Click Deploy Branch
    # Once it finishes, click View
    # Party



# deployment-demo1
# f10-demo-demo
# f10-demo-demo
# deployment-demo1


# f10-hosting-code-along
