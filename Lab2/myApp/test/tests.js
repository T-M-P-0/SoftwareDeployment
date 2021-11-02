var assert = require("assert");
var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../index");

chai.use(chaiHttp);
chai.should();

describe("GET /", function() {
    it("should return Hello", function(done) {
        chai
            .request(app)
            .get("/")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                let result = res.body.Message;
                assert.equal(result, "Hello");
                done();
            });
    });
});