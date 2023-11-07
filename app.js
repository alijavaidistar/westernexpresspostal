const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();

// Configure the database connection
// Configuring the database
const config = {
    user: 'systemauthor',
    password: 'westernexpress2023_',
    server: 'westernexpressserver.database.windows.net',
    database: 'westernexpressdb',
    port: 1433,
    options: {
      encrypt: true,
      trustServerCertificate: false
    }
  };

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Handling routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index/login.html');
});

// Login route
app.post('/login', async (req, res) => {
    try {
        await sql.connect(dbConfig);
        const result = await sql.query`SELECT * FROM users WHERE username = ${req.body.username} AND password = ${req.body.password}`;
        if (result.recordset.length > 0) {
            res.sendFile(__dirname + '/index/customer/customer.html');
        } else {
            res.send('Invalid username or password');
        }
    } catch (err) {
        console.error('Error while connecting to the database:', err);
        res.send('Error while connecting to the database');
    }
});

// Signup route
app.post('/signup', async (req, res) => {
    try {
        await sql.connect(dbConfig);
        await sql.query`INSERT INTO credentials_user_pass (usernames, passwords) VALUES (${req.body.username}, ${req.body.password})`;
        res.send('Signup successful');
    } catch (err) {
        console.error('Error while connecting to the database:', err);
        res.send('Error while connecting to the database');
    }
});

// Start the server
const port = 5500; // Or any other port you want to use
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
