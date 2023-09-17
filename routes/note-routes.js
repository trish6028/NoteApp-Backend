const express = require('express')
const router =  express.Router();
const { upload } = require("../middleware/multer")
const {getAllNotes,SaveAllNote,DeleteNote,UpdateNote,uploadImage} = require('../controller/note-controller')
 
 
router.get('/getNotes' ,getAllNotes)
 
 router.post('/saveNotes', SaveAllNote);
router.delete('/deleteNote/:id',DeleteNote)
router.put('/updateNote/:id',UpdateNote)
router.post('/upload_image/:id', upload.single("image"), uploadImage);

module.exports = router;