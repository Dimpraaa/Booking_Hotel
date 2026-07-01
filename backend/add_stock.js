const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'booking_hotel_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting:', err);
    process.exit(1);
  }
  
  // Increase stock for all rooms to 50 so it never runs out during testing
  db.query('UPDATE rooms SET stock = 50', (err, result) => {
    if (err) console.error(err);
    else console.log('Successfully updated room stock to 50 for all rooms. Affected rows:', result.affectedRows);
    process.exit(0);
  });
});
