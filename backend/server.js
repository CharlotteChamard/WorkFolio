const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json

// Change ':memory:' to a file path to store the database on disk
const db = new sqlite3.Database('./users.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users (email TEXT, password TEXT)');
});

// Route to add a new user
app.post('/adduser', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
    stmt.run(email, password, (err) => {
        stmt.finalize();

        if (err) {
            return res.status(500).send('Error adding user');
        }

        res.send('User added successfully');
    });
});


// Route to get all users
app.get('/users', (req, res) => {
    db.all('SELECT rowid AS id, email, password FROM users', [], (err, rows) => {
        if (err) {
            res.status(500).send('Error in retrieving users');
            return;
        }
        res.json(rows);
    });
});

// Route to get a specific user by ID
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT rowid AS id, email, password FROM users WHERE rowid = ?', [id], (err, row) => {
        if (err) {
            res.status(500).send('Error in retrieving user');
            return;
        }
        if (row) {
            res.json(row);
        } else {
            res.status(404).send('User not found');
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    // Check if the user exists with the given email and password
    db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
        if (err) {
            return res.status(500).send('Error on the server.');
        }
        if (row) {
            // User found
            res.send({ message: 'Login successful' });
        } else {
            // User not found
            res.status(404).send('User not found');
        }
    });
});

app.get('/', (req, res) => {
    return res.json("From backend Side");
});

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});

// Close the database connection when the application is terminated
process.on('SIGINT', () => {
    db.close(() => {
        console.log('Database connection closed');
        process.exit(0);
    });
});
