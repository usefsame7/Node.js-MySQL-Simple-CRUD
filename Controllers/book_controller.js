
const { json } = require('express');
const db = require('../db/db_connection')






  // get all books
const getAllBooks = async (req, res) => {
 
  db.query(
    'SELECT * FROM books', (err, books) => {

      if (err) return res.json({ msg: err.message });
      res.json({ books });

    }
  );

};





   // add a new book
const newBook = async (req, res) => { const { name, author } = req.body;

  if (!name || !author) return res.json({ msg: "provide the name and the author of the book" });
  
    
     db.query(
      "INSERT INTO books (name, author) VALUES (?,?)", [name, author],
     (err, result) => {
       if (err) return res.json({ msg: err.message });
     }
    );

     db.query(
      "SELECT * FROM books WHERE name = ?", [name], (err, book) => {
        if (err) return res.json({ msg: err.message });
        res.json({ book });
      }
    );

};







    // update a specific book 
const updateBook =  async (req, res) => {
   const { id, name, author } = req.body; 

  db.query(
   'UPDATE books SET name = ?, author = ? WHERE id = ?', [name, author, id], (err, result) => {
      
     if (err) return res.json({ msg: err.message });

   }
 );

 db.query(
  'SELECT * FROM books WHERE id = ?', [id], (err, updatedBook) => {

     if (err) return res.json({ msg: err.message });
     res.json({ updatedBook: updatedBook });

  }
 );
  
};







//  delete a specific book 
const deleteBook = async (req, res) => {
  let id = req.body.id;

   db.query(
    'DELETE FROM books WHERE id = ?', [id], (err, result) => {

      if (err) return res.json({ msg: err.message });
      res.json({ msg: 'book deleted successfully .. !' });

    }
  );
 
};






module.exports = {
  newBook,
  updateBook,
  deleteBook,
  getAllBooks
}