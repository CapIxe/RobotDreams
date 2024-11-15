import * as path from "node:path";
import * as fs from "node:fs";

function readFilesRecursively(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          return;
        }

        if (stats.isDirectory()) {
          readFilesRecursively(filePath);
        } else if (stats.isFile() && path.extname(file) === ".json") {
          fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
              return;
            }

            console.log(`Вміст файлу ${filePath}:\n`, data);
          });
        }
      });
    });
  });
}

readFilesRecursively("some-folder");
