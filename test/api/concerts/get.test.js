const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const Concert = require('../../../models/concert.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('GET', ()=> {
    describe('/api/concerts/performer', () => {

        before(async () => {
            const testConOne = new Concert({performer: 'Performer Name', image: 'Image #1', day: 1, price: 1, id: 1, genre: 'Genre' });
            await testConOne.save();
          });
          
          after(async () => {
            await Concert.deleteOne({performer: 'Performer Name'});
          });
    
      
        it('/:performer should return one concert by :performer', async () => {
            const res = await request(server).get('/api/concerts/performer/performer name');
            expect(res.status).to.be.equal(200);
            expect(...res.body).to.be.an('object');
            expect(res.body).to.not.be.null;
        });
      });
    
      describe('/api/concerts/genre', () => {
    
        before(async () => {
            const testConOne = new Concert({performer: 'Performer Name', image: 'Image #1', day: 1, price: 1, id: 1, genre: 'genre' });
            await testConOne.save();
          });
          
          after(async () => {
            await Concert.deleteOne({genre: 'genre'});
          });
    
      
        it('/:genre should return one concert by :genre', async () => {
            const res = await request(server).get('/api/concerts/genre/genre');
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.not.be.null;
        });
      });
    
      describe('/api/concerts/price', () => {
    
        before(async () => {
            const testConOne = new Concert({performer: 'Performer Name', image: 'Image #1', day: 1, price: 10, id: 1, genre: 'genre' });
            await testConOne.save();
    
            const testConTwo = new Concert({performer: 'Performer Name', image: 'Image #1', day: 1, price: 20, id: 1, genre: 'genre' });
            await testConTwo.save();
          });
          
          after(async () => {
            await Concert.deleteMany({performer: 'Performer Name'});
          });
    
      
        it('/:price_min/:price_max should return one concert by :price_min/:price_max', async () => {
            const res = await request(server).get('/api/concerts/price/5/15');
            expect(res.status).to.be.equal(200);
            expect(res.body[0].price).to.be.gte(5);
            expect(res.body[0].price).to.be.lte(15);
            expect(res.body).to.not.be.null;
        });
    
        it('/:price_min/:price_max should not return concerts if price is not between :price_min/:price_max ', async () => {
            const res = await request(server).get('/api/concerts/price/0/5');
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf(0)
        });
      });

      describe('/api/price/day/:day', () => {
    
        before(async () => {
            const testConOne = new Concert({performer: 'Performer Name', image: 'Image #1', day: 10, price: 10, id: 1, genre: 'genre' });
            await testConOne.save();

          });
          
          after(async () => {
            await Concert.deleteMany({performer: 'Performer Name'});
          });
    
      
        it('/:day should return one concert by :day', async () => {
            const res = await request(server).get('/api/concerts/price/day/10');
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf(1);
            expect(res.body).to.not.be.null;
        });
})
})
