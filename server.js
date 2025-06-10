const express = require('express');
const cors = require('cors');
const sql= require('mysql');
const app= express();

app.use(express.json());
app.use(cors());

const db= sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'online book store'
});

app.get('/', (req, res) => {

    const sql='SELECT * FROM bookstore';
    db.query(sql,(err,data)=>{
        if(err) return res.json("there is an error");
        return res.json(data);
    })

});


app.get('/singlebook/:book_ac_no', (req, res) => {
    const id= req.params.book_ac_no;
    const sql = 'SELECT * FROM bookstore WHERE book_ac_no = ?';
    db.query(sql, [id], (err, data) => {
        if (err) return res.json("there is an error in selecting");
        return res.json(data[0]);
    });
}
);

app.post('/addbks', (req, res) => {
    const sql = 'INSERT INTO bookstore (book_title, book_writer, book_type, price, edition, publisher, stock_quantity) VALUES (?)';
    const values = [
        req.body.book_title,
        req.body.book_writer,
        req.body.book_type,
        req.body.price,
        req.body.edition,
        req.body.publisher,
        req.body.stock_quantity
    ];

    db.query(sql, [values], (err, data) => {
        if (err) return res.json("there is an error");
        return res.json(data);
    });
});

app.put('/updatebook/:book_ac_no', (req, res) => {
    const id = req.params.book_ac_no;
    const sql = 'UPDATE bookstore SET book_title = ?, book_writer = ?, book_type = ?, price = ?, edition = ?, publisher = ?, stock_quantity = ? WHERE book_ac_no = ?';
    const values = [
        req.body.book_title,
        req.body.book_writer,
        req.body.book_type,
        req.body.price,
        req.body.edition,
        req.body.publisher,
        req.body.stock_quantity
    ];

    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json("Error in updating");
        return res.json(data);
    });
});

app.delete('/deletebook/:book_ac_no', (req, res) => {
    const id = req.params.book_ac_no;
    const sql = 'DELETE FROM bookstore WHERE book_ac_no = ?';
    db.query(sql, [id], (err, data) => {
        if (err) return res.json("Error in deleting");
        return res.json(data);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});