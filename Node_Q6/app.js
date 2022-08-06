const extract = require('extract-zip');
const path = require('path');

try {
    extract('./CapturedMoment.zip', { dir: path.join(__dirname,'CapturedMoment') }, function (err) {
        if (err) {
        console.log(err);
        }
    });
    console.log('Extracted');
} catch (err) {
    console.log(err);
}