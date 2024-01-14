const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2/promise'); // Use the promise version
const fs = require('fs')


app.use(cors());
app.use(express.json());

const connection = mysql.createPool({
    user: 'Den135',
    host: 'localhost',
    database: 'people',
    password: '123',
  
});

if(connection){
    console.log('Connection in DB')
}



const img3 = fs.readFileSync('D:/img/users2/img3.jpg');

// //Assuming 'users' is the name of your table, and 'id' is the column to identify the user
// connection.query('UPDATE users SET img = ?  WHERE id = ?', [img, 3], (error, results, fields) => {
//     if (error) throw error;
//     console.log('Зображення успішно оновлене в базі даних.');
// });


// connection.query('INSERT INTO users (id, name, age, email, history, url, img) VALUES (?, ?, ?, ?, ?, ?, ?)', 
// [12, 'BORYS', 27, 'b@gmail.com', 'User information 12', 'http://localhost:5000/12', img12],
//   (error, results, fields) => {
//     if (error) throw error;
//     console.log('Зображення успішно оновлене в базі даних.');
//   }
// );

app.get('/people', async (req, res) => {
    try {
        const userId = req.query.id;

        let rows;

        if (!userId) {
            res.status(400).json({ error: 'Missing user ID parameter' });
            return;
        } else if (userId === '1') {
            [rows] = await connection.execute('SELECT * FROM users');
        } else if (userId === '2') {
            [rows] = await connection.execute('SELECT * FROM users2');
        } else {
            res.status(400).json({ error: 'Invalid user ID parameter' });
            return;
        }

        if (!rows || !rows.length) {
            res.status(404).json({ error: 'Data not found' });
            return;
        }

        res.status(200).json(rows);
        console.log('Combined Rows:', rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// app.get('/people', async (req, res) => {
//     try {
//         const query1 = 'SELECT * FROM users2';
//         // const query2 = 'SELECT * FROM users';

//         const [rows1] = await connection.execute(query1);
      

//         res.status(200).json(rows1);
//         console.log(rows1);
//     } catch (error) {
//         console.error('Error executing queries:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });





        








// app.post('/people', async function (req, res) {
//     try {
//         const query = 'INSERT INTO users2 (id, name, age, email, history, url, img) VALUES (?, ?, ?, ?, ?, ?, ?)';
//         const values = [3, 'BALU', 22, 'B@gmail.com', 'User information 23', 'http://localhost:5000/people?page=3', img3];

//         const [results, fields] = await connection.execute(query, values);

//         console.log('Зображення успішно додане в базу даних.');
//         res.status(200).json(results);
//         console.log(results);
//     } catch (error) {
//         console.error('Помилка виконання запиту:', error);
//         res.status(500).json({ error: 'Внутрішня помилка сервера' });
//     }
// });

app.listen(5000, function () {
    console.log('Server is running on port 5000');
});

// Close the database connection when the Node.js process exits
// process.on('exit', () => {
//     connection.end();
// });
