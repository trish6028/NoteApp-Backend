    const connection = require('../db/db-connection')


const getAllUsers=(req,res)=>{
    connection.query('select * from users', (err, rows) => {
        if (err) throw err
        res.send(rows)  
      })
}

const AddSignup=(req,res)=>{
    const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const newUser = {
    username,
    password
  };

  connection.query('INSERT INTO users SET ?', newUser, (err, result) => {
    if (err) {
      console.error('Error during signup:', err);
      return res.status(500).json({ error: 'Error during signup' });
    }
    console.log('User signed up:', result);
    res.status(200).json({ message: 'Signup successful' });
  });

}

const AddLogin=(req,res)=>{
    const { username, password } = req.body;

    const loginQuery = `SELECT * FROM users WHERE username = ? AND password = ?`;
    connection.query(loginQuery, [username, password], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (result.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      return res.status(200).json({ message: 'Login successful' });
    });
}


module.exports={getAllUsers,AddSignup,AddLogin}