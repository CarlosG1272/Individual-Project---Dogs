const server = require("../../src/app")
const request = require("supertest")
const { Dog } = require('../../src/db.js');


describe('GET /DOGS', () => {
        let expectDataApi = {
            "api": [{
            "id": 6,
            "name": "Akita",
            "height_min": 61,
            "height_max": 71,
            "weight_min": 29,
            "weight_max": 52,
            "min_life": 10,
            "max_life": 14,
            "temperaments": [
            "Docile",
            "Alert",
            "Responsive",
            "Dignified",
            "Composed",
            "Friendly",
            "Receptive",
            "Faithful",
            "Courageous"
            ],
            "img_Url": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
            "bred_for": "Hunting bears",
            "breed_group": "Working"
            }
            ],
            "db": null
            }
        let createDogDB = {name: "Firulais", height_min: 5,height_max: 30, weight_min: 10,weight_max: 20,min_life: 10, max_life: 20}
        let expectDataDb = {"api": [], "db": {"height_max": 30, "height_min": 5, "max_life": 20, "min_life": 10, "name": "Firulais", "temperaments": [], "weight_max": 20, "weight_min": 10}}

        describe("If send incorrect name: ", ()=> {
            it("responds with 404", async()=>{
                const response = await request(server).get("/dogs?name=skwjrbnx")
                expect(response.statusCode).toBe(404)
            })
    
            it("responds with an object containing an error message", async()=> {
                const response = await request(server).get("/dogs?name=asmxq123ns")
                expect(response.body).toEqual({msg: "No information found"})
            })
        })
        describe("If don´t recibe query", ()=> {
            it("Should be responds with status code 200", async ()=>{
                const response = await request(server).get("/dogs");
                expect(response.statusCode).toBe(200)
            })
        })
        describe("If recibe a correct query name: ", ()=> {
            afterAll(()=> {
                Dog.sync({force: true})
            })
            it("and the breed is in API RESULT", async ()=>{

                const createDog = await Dog.create(createDogDB)
                const response = await request(server).get("/dogs?name=Akita");
                expect(response.body).toStrictEqual(expectDataApi)
            })
        
            it("and the breed is in DB RESULT", async ()=> {
                const createDog = await Dog.create(createDogDB)
                const response = await request(server).get("/dogs?name=Firulais");
                // toMatchObject compara de forma parcial
                expect(response.body).toMatchObject(expectDataDb)
            })
        })
        
    });
    
