const request = require("supertest"); 
const server = require('../../src/app')
const {Favorites} = require("../../src/db")

describe('FAVORITES', () => {
    beforeAll(()=> {
        Favorites.sync({force:true})
    })
    afterAll(()=>{
        Favorites.sync({force:true})
    })
    describe('POST /favorites', () => {
        describe('If send invalid id', () => {
            it("should be responds with status code 400", async ()=> {
                let response = await request(server).post('/favorites?id=wrongID')
                expect(response.statusCode).toBe(400)
            })

            it("should be responds with a custom msg error", async()=> {
                let response = await request(server).post('/favorites?id=anrbsdeqwas')
                expect(response.body).toStrictEqual({msg: "Don´t exist a dog with this ID"})
            })

            it("should not be added to the favorites table", async()=> {
                let favorites = await Favorites.findAll(); 
                expect(favorites).toStrictEqual([])
            })
        });
        describe('If send correct id', ()=> {
            let expectData = [{"DogId": "30"}, {"DogId": "1"}]

            it("should be responds with status code 200", async()=>{
                let response = await request(server).post('/favorites?id=30')
                expect(response.statusCode).toBe(200)
            })

            it("Should be responds with a custom msg", async()=> {
                let response = await request(server).post('/favorites?id=1')
                expect(response.body).toStrictEqual({msg: "Succesfully added in favorites!"})
            })

            it("Should be added to the favorite table", async()=>{
                // EL SECRETO ES RAW TRUE
                let favorites = await Favorites.findAll({attributes: ["DogId"], raw: true})
                expect(favorites).toStrictEqual(expectData)
            })

            it("should not add repeated ids", async()=> {
                let response = await request(server).post('/favorites?id=10')
                let response2 = await request(server).post('/favorites?id=10')
                let result = await Favorites.findAll({where: {DogId: "10"}})
                expect(result.length).toBe(1)
            })

            it("should not add repeated ids, send a custom msg", async()=> {
                let response = await request(server).post('/favorites?id=10')
                let result = await Favorites.findAll({where: {DogId: "10"}})
                expect(response.body).toStrictEqual({msg:"Dog is already in the favorites"})
            })
        })
        

    });

    describe("DELETE /favorites", ()=> {
        describe("Send invalid ID", ()=> {
            it("Should be responds with 400 status code", async()=> {
                let response = await request(server).delete('/favorites?id=0481jqdas')
                expect(response.statusCode).toBe(404)
            })
    
            it("Should be responds with a custom error message", async()=> {
                let response = await request(server).delete('/favorites?id=nabasdz123')
                expect(response.body).toStrictEqual({msg: `Don´t exist a dog with id nabasdz123`})
            })
            
        })
       
        describe("Send correct ID", ()=> {
            it("Should be responds with 200 status code", async()=> {
                let response = await request(server).delete('/favorites?id=30')
                expect(response.statusCode).toBe(200)
            })
            
            it("Should be responds with a custom message", async()=> {
                let response = await request(server).delete('/favorites?id=1')
                expect(response.body).toStrictEqual({msg: `Dog with id 1 successfully remove to favorites`})
            })

            it("Should be remove to favorites table", async()=> {
                let coincidence = await Favorites.findAll({where: {DogId: "1"}})
                expect(coincidence).toStrictEqual([])
            })
        })
        
    })
});