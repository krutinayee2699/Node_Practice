const fs = require('fs');

listFiles();

fs.promises.unlink('photo.jpg')
    .then(() => console.log('File deleted'))
    .catch(err => console.log(err));

function listFiles() {
    console.log('Listing files...');
    fs.readdirSync(__dirname)
        .forEach(file => console.log(file));
}