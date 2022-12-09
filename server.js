
const { app, db, PORT } = require('./config/config');
const { SERVER_DB_URI } = require('./constants/constants');
const usersRouter= require('./routes/auth.route');

const bootstrap = async () => {
    try {
        db.set('strictQuery', true);
        await db.connect(SERVER_DB_URI);//("mongodb://localhost:27017");
        app.listen(PORT, async () => {
            console.log("Connection Established")
            app.use('/users', usersRouter);
    });
    } catch (error) {
        console.log(error);
    }
};

bootstrap();











// const express = require('express');
// const cors = require('cors');
// const MongoClient = require('mongoose');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const connectionURL = process.env.DB_URI;           // Change the url in production
// const databaseName = "task-manager"                           // Change the database name

// MongoClient.connect(connectionURL, (error, client) => {
//     if (error) {
//         return console.log(error)
//     }
//     console.log("Connection acquired!")
// })

// app.listen(port, () => {
//     console.log(`Server is running : ${port}`);
    
// });

