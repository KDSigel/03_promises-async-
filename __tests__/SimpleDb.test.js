const { mkdir, rm } = require('fs/promises');
const SimpleDb = require('../lib/SimpleDb.js');

describe('SimpleDb', () => {
  const rootDir = './__tests__/store';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() =>
      mkdir(rootDir, { recursive: true })
    );
  });

  it('should create a file from an object and save somewhere', () => {

    const objectToSave = { hu_mon: 'karl' };
    const finalFile = { 
      hu_mon: 'karl',
      id: expect.any(String)
    };

    const simpleDb = new SimpleDb(rootDir);
    return simpleDb
      .save(objectToSave)
      .then(() => simpleDb.get(objectToSave.id))
      .then((file) => expect(file).toEqual(finalFile));
  });

  it('returns an array of all the objects in the directory, deserialized from the corresponding files in the directory', () => {
    // const expected = '';
    // const allObjects = simpleDb.getAll(rootDir);


  });

});
