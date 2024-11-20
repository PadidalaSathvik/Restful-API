import * as chai from "chai";
import chaiHttp from "chai-http";
import express from "express";
import bodyParser from "body-parser";

// Configure Chai
chai.use(chaiHttp);
const { expect } = chai;

// Mock Express App
const app = express();
app.use(bodyParser.json());

// Mock Data
const custemsData = [
  { id: "1", title: "task 10", due_date: "21-12-2024" },
  { id: "2", title: "task 11", due_date: "22-12-2024" },
  { id: "3", title: "task 12", due_date: "23-12-2024" }
];

// Route to Test
app.get("/custemers/:id", (req, res) => {
  const custemer = custemsData.find(item => item.id === req.params.id);
  if (!custemer) {
    res.status(404).send("item not found");
  } else {
    res.send(custemer);
  }
});

// Mocha Tests
describe("GET /custemers/:id", () => {
  it("should return the customer with the correct ID", (done) => {
    chai
      .request(app)
      .get("/custemers/1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("title", "task 10");
        done();
      });
  });

  it("should return 404 for a non-existent customer ID", (done) => {
    chai
      .request(app)
      .get("/custemers/99")
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.equal("item not found");
        done();
      });
  });
});
