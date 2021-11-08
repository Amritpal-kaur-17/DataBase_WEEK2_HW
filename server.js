const express = require("express");
const app = express();
const {Pool} = require("pg");


const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cyf_ecommerce',
    password: 'palamrit123',
    port: 5432,
});

app.get("/cyf_ecommerce", function(req, res) {
    connection.query('SELECT * FROM customers', (error, result) => {
        res.json(result.rows);
    });
});

app.get("/cyf_ecommerce_suppliers", function(req, res) {
    connection.query('SELECT * FROM suppliers', (error, result) => {
        res.json(result.rows);
    });
});


app.get("/cyf_ecommerce_suppliers_prodcts", function(req, res) {
    connection.query('Select p.product_name, s.supplier_name from products p Inner join suppliers s on p.supplier_id = s.id;', (error, result) => {
        res.json(result.rows);
    });
});




/*app.get("/hotels", (request, response) =>{
   response.json({message: "almost there"});
});*/
const port = 4000;
app.listen(port, () =>
    console.log(`Server is listening on port 400. Ready to accept requests!: ${port}`));
