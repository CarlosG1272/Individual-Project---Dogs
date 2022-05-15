
const request = require("supertest")
const server = require("../../src/app")
const {Temperaments} =require('../../src/db')

describe("GET /temperaments", () => {
     afterAll( ()=>{
         Temperaments.sync({force: true})
     })

     beforeAll( ()=> {
        Temperaments.sync({force: true})
     })
     
    it("Save the data in DB in the first instance", async ()=>{
        const response = await request(server).get('/temperaments')
        expect(response.body[0]).toBe(undefined)
    })
    
    it("Responds with status code 200", async()=> {
        const response = await request(server).get('/temperaments')
        expect(response.statusCode).toBe(200)
    })

    it("In the second instance the data provides from DB", async ()=>{
        const response = await request(server).get('/temperaments')
        expect(Array.isArray(response.body)).toBe(true)
    })
});