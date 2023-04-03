const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../db/db_connection')



const registration = async (req, res) => { const { username, password } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);

   db.query(
    "insert into users (username, password) values (?,?)", [username, hashedPassword], 
    (err, result) => {

      if (err) return res.json({ error: err.message });
      
    }
   )

   db.query(
    'SELECT * FROM users WHERE username = ?', username, (err, user) => {

      if (err) return res.json({ error : err.message });
      res.json({ user });

    }
   )
}





const login = async (req, res) => { const { username, password } = req.body;
    if (!username || !password) return res.json({ msg: "Missing Credentials" });
    
    db.query(
      'SELECT * FROM users WHERE username = ?', [username],  async (err, user) => {
        
         if (err) return res.json({ error: err.message });
 
           if (!user) return res.json({ msg: "Invalid Credentials" });
 
            const passMatching = await bcrypt.compare(password, user.password);
  
             if (!passMatching) return res.json({ msg: "Incorrect Password" });

      }
    )

           const id = new Date().getDate();
        const userData = { id, username };
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: "25d" });

  res.json({ token, userData });

};



 const getAllUsers = (req, res) => {
 
  db.query(
    'SELECT * FROM users', (err, result) => {
     
      if (err) return res.json({ error: err.message });
      res.json({ result });

    }
  )

};




module.exports = {
  registration,
    login,
    getAllUsers,
}