const db = require('./db'); // Assume './db' exports an object with a start method

// Start the database
db.start().then(() => {
    console.log('Database successfully started');
}).catch((error) => {
    console.error('Failed to start the database:', error);
});
