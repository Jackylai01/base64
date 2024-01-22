const fs = require('fs');
const path = require('path');

const fontPath = path.join(__dirname, './NotoSansTC-VariableFont_wght.ttf');
const outputPath = path.join(__dirname, 'fontBase64.txt');

fs.readFile(fontPath, { encoding: 'base64' }, (err, base64String) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  fs.writeFile(outputPath, base64String, (writeErr) => {
    if (writeErr) {
      console.error('Error writing file:', writeErr);
    } else {
      console.log(`Base64 encoded font saved to ${outputPath}`);
    }
  });
});
