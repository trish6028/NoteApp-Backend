const connection = require('../db/db-connection')





const getAllNotes = (req, res) => {
  connection.query('select * from notes', (err, rows) => {
    if (err) throw err
    res.send(rows)
  })
}




// const SaveAllNote=(req,res)=>{

//   const note = req.body.note;

//   const query = 'INSERT INTO notes (note) VALUES (?)';
//   connection.query(query, [note], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error saving note');
//     } else {
//       res.status(200).send('Note saved successfully');
//     }
//   });

// }



const SaveAllNote = async (req, res) => {
  const note = req.body.note;


  const query = 'INSERT INTO Notes (note) VALUES (?)';
  connection.query(query, [note], (err, result) => {
    console.log('====================================');
    console.log(result.insertId);
    console.log('====================================');
    if (err) {
      console.error(err);
      res.status(500).send('Error saving note');
    } else {
      res.json(result.insertId);
    }
  });
};






const DeleteNote = (req, res) => {
  const noteId = req.params.id;

  const query = 'DELETE FROM notes WHERE id = ?';
  connection.query(query, [noteId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting note');
    } else {
      res.status(200).send('Note deleted successfully');
    }
  });
};

const UpdateNote = (req, res) => {
  const noteId = req.params.id;
  const updatedNote = req.body.note;

  const query = 'UPDATE Notes SET note = ? WHERE id = ?';
  connection.query(query, [updatedNote, noteId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating note');
    } else {
      if (result.affectedRows > 0) {
        res.status(200).send('Note updated successfully');
      } else {
        res.status(404).send('Note not found');
      }
    }
  });

};


const uploadImage = (req, res) => {

  try {

    if (req.file == undefined) {
      return res.json({ message: "Please upload a file!" });
    }

    connection.query('UPDATE Notes set image_name=? where id=?', [req.file.filename, req.params.id], (err, rows) => {
      if (err) throw err
    })

    return res.json({
      image: req.file,
      message: 'Image uploaded successfully'
    });

  } catch (error) {
    res.json({ error: 'Internal Server Error! Try again, please!' })
  }
}




module.exports = { getAllNotes, SaveAllNote, DeleteNote, UpdateNote, uploadImage }