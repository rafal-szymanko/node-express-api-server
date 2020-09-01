const Concert = require('../concert.model');
const expect = require('chai').expect;


const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
const mongoose = require('mongoose');

let fakeDB;

describe('', () => {

  before(async () => {

    try {
      const fakeDB = new MongoMemoryServer();

      const uri = await fakeDB.getConnectionString();

      mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    } catch (err) {
      console.log(err);
    }

  });

  after(async () => {
    await mongoose.disconnect();
    await fakeDB.stop();
  });

});


describe('Employee', ()=> {
  describe('Reading data', () => {

    before(async () => {
      const testConcertOne = new Concert({
        id: 1,
        performer: 'performer #1',
        genre: 'genre #2',
        price: 1,
        day: 1,
        image: 'lorem# 1'
      });
      await testConcertOne.save();

      const testConcertTwo = new Concert({
        id: 2,
        performer: 'performer #2',
        genre: 'genre #2',
        price: 2,
        day: 2,
        image: 'lorem #2'
      });
      await testConcertTwo.save();
    });

    after(async () => {
      await Concert.deleteMany();
    });

    it('should return all the data with "find" method', async () => {

      const concerts = await Concert.find();
      const expectedLength = 2;
      expect(concerts.length).to.be.equal(expectedLength);
    });

  });
})