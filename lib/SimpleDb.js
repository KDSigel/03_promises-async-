const { writeFile, readFile } = require('fs/promises');
const shortid = require('shortid');
const path = require('path');

class SimpleDb {
  constructor(rootDir) {
    this.rootDir = rootDir;
  }

  save(objectToSave) {
    const shortId = shortid.generate();
    const fileName = `${shortId}.json`;
    objectToSave.id = shortId;
    this.newLocation = path.join(this.rootDir, fileName);
    const stringyObject = JSON.stringify(objectToSave);
    return writeFile(this.newLocation, stringyObject);
  }

  get(id) {
    const fileName = `${id}.json`;
    this.newLocation = path.join(this.rootDir, fileName);
    return readFile(this.newLocation, 'utf8')
      .then(file => JSON.parse(file))
      .catch((error) => {
        if (error.code === 'ENOENT') {
          return null;
        }
        throw error;
      });
  }

  getAll() {

    const something = this.rootDir.map(file => JSON.parse(file));
    return readFile(something)

    // return readFile(this.rootDir, 'utf8')
    // .then(file => JSON.parse(file))

      .catch((error) => {
        if (error.code === 'ENOENT') {
          return null;
        }
        throw error;
      });
  }

}

module.exports = SimpleDb;
