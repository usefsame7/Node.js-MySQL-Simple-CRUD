const express = require("express");
 const app = express();
   require("dotenv").config();
   const authRoute = require('./Routes/auth') 
   const BookRoute = require('./Routes/book_route')
   require('./db/db_connection')






    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

  
  app.listen(7000, () => {
    console.log("server is running on port 7000 ...");
  });





  app.use('/api', authRoute)
  app.use('/api', BookRoute)





