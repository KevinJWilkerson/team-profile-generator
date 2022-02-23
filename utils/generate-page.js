const fs = require("fs");

// Write files
const writeFile = (fileContent) => {
  console.log("writeFile as follows: ");
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File successfully created!",
      });
    });
  });
};

// Copy file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Stylesheet successfully created!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
