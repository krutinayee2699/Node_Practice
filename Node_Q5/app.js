const JSZip = require('jszip');
const fs = require('fs');

const zip = new JSZip();

try {
    const pdfData = fs.readFileSync('CapturedMoment.pdf');
    zip.file("PDFFile.pdf", pdfData);

    zip.file("Textfile.txt", "Hello NodeJS\n");

    const images = ["photo.jpg", "github.png"];
    const img = zip.folder("images");

    for (const image of images) {
        const imageData = fs.readFileSync(image);
        img.file(image, imageData);
    }

    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(fs.createWriteStream('CapturedMoment.zip'))
        .on('finish', function () {
            console.log("CapturedMoment.zip written.");
        });

} catch (err) {
    console.error(err)
}