// const app = require('../index')
// const supertest = require('supertest')
// const request = supertest(app)

// beforeAll(async () => {
//     const url = `mongodb://127.0.0.1/service-desk`
//     await mongoose.connect(url, { useNewUrlParser: true })
//   })

// it('Gets the tickets endpoint', async done => {
//     const res = await request('/api/tickets')

//     expect(res.status).toBe(200)
//     done()
// })

const Ticket = require("../models/Ticket");

it("Should save user to database", async (done) => {
  const res = await request.post("/api/ticket").send({
    title: "Zell",
    email: "testing@gmail.com",
  });

  // Searches the user in the database
  const ticket = await Ticket.findOne({ email: "testing@gmail.com" });
  expect(ticket.name).toBeTruthy();
  expect(ticket.email).toBeTruthy();

  done();
});
