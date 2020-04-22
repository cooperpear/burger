# Burger
The burger app


# Node Express Handlebars (workaround) - Eat Burgers

Eatburgers takes in user inputs via an HTML page. It utilizes both front and back end. It provides a server.js file that will run an express server for you. It then generates a list of burger inputs and the ability to devour a burger. When a Burger is added, it is updated in the SQL database. When a burger is devoured, its SQL Boolean property of "devoured" changes to true.  

This application is deployed to Heroku. Run "Heroku open" in command line to display this application in your web browser. 

## Installation & Usages

In command line:
Navigate to burger folder.
Use npm install to install your packages. 
Run node server.js to initiate a listening server on port 8080.
Navigate to localhost:8080 in your web browser to begin. 
Navigate to localhost:8080/burger to see handlebar workaround version
Run "Heroku open" in command line to see deployed heroku version. 


```bash
burger/server.js
localhost:8080
localhost:8080/burger
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
Copyright 2019
