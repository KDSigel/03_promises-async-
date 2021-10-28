const { writeFile, readFile } = require('fs/promises');
const shortid = require('shortid');
const path = require('path');

class SimpleDb {
  constructor(rootDir) {
    this.rootDir = rootDir;
  }

  save(objectToSave) {

    const fileName = `${shortid.generate()}.json`;
    const stringyObject = JSON.stringify(objectToSave);



    this.newLocation = path.join(stringyObject, fileName);
    return writeFile(this.newLocation, stringyObject);
  }

  //   get(id) {
  //     return readFile(this.newLocation);
  //   }

}
  
module.exports = SimpleDb;
