const server = require("../../src/app")
const request = require("supertest")

describe('GET /DOGS', () => {
    it("Should be responds with status code 200", async ()=>{
        const response = await request(server).get("/dogs").send();
        expect(response.statusCode).toBe(200)
    })
});

describe('POST /dog', () => {
    test('should be responds with 400 when dont send body', async () => {
        let response = await request(server).post("/dogs").send()
        expect(response.statusCode).toBe(400)
    });
});