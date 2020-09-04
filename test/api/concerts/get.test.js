const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const Concert = require('../../../models/concert.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;


describe('GET /api/concerts/performer', () => {

    before(async () => {
        const testDepOne = new Concert({ _id: '5d9f1140f10a81216cfd4408', name: 'Department #1' });
        await testDepOne.save();
      
        const testDepTwo = new Concert({ _id: '5d9f1159f81ce8d1ef2bee48', name: 'Department #2' });
        await testDepTwo.save();
      });
      
      after(async () => {
        await Concert.deleteMany();
      });

  
    it('/:id should return one performer by :performer', async () => {
        const res = await request(server).get('/api/concerts/5d9f1140f10a81216cfd4408');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
    });
  });

  describe('GET /api/concerts/genre', () => {

    before(async () => {
        const testDepOne = new Concert({ _id: '5d9f1140f10a81216cfd4408', name: 'Department #1' });
        await testDepOne.save();
      
        const testDepTwo = new Concert({ _id: '5d9f1159f81ce8d1ef2bee48', name: 'Department #2' });
        await testDepTwo.save();
      });
      
      after(async () => {
        await Department.deleteMany();
      });

  
    it('/:id should return one performer by :genre', async () => {
        const res = await request(server).get('/api/departments/5d9f1140f10a81216cfd4408');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
    });
  });

//   describe('GET /api/concerts/price', () => {

//     before(async () => {
//         const testDepOne = new Department({ _id: '5d9f1140f10a81216cfd4408', name: 'Department #1' });
//         await testDepOne.save();
      
//         const testDepTwo = new Department({ _id: '5d9f1159f81ce8d1ef2bee48', name: 'Department #2' });
//         await testDepTwo.save();
//       });
      
//       after(async () => {
//         await Department.deleteMany();
//       });

  
//     it('/:id should return one performer by :genre', async () => {
//         const res = await request(server).get('/api/departments/5d9f1140f10a81216cfd4408');
//         expect(res.status).to.be.equal(200);
//         expect(res.body).to.be.an('object');
//         expect(res.body).to.not.be.null;
//     });
//   });