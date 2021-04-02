//test.js
// import all dependencies

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('.');

// Configure Chai to use Chai Http
chai.use(chaiHttp);
const expect = chai.expect;

//Define the test
describe('Server Alive Test ', () => {
    it('should say hello', done => {

        //Initiate test request to the /ping endpoint
        chai 
         .request(app)
         .get('/ping')
         .end((err, res) => {

            // Check to be sure the response is "hello world"
            expect(res.text).to.equal('hello world');
            done();
         });
    });

    //Shutdown the server once test complete
    after(done =>{
        process.exit(0);
    });
});