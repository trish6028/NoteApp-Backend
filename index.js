const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var path = require('path');
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/images',express.static(path.join (__dirname, 'images')));


const users = require('./routes/user-routes')
const notes = require('./routes/note-routes')

app.use('/api/users',users)
app.use('/api/notes',notes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
