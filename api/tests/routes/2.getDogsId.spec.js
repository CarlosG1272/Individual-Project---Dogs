const request = require("supertest")
const server = require("../../src/app")
const { Dog } = require('../../src/db.js');

describe('GET /dogs/:id', () => {
    describe("When  send invalid Id", ()=> {
        it("Should be responds with 404 status code when send invalid id", async ()=>{
            const response = await request(server).get("/dogs/wrong")
            expect(response.statusCode).toBe(404)
        })

        it("Should be responds with a custom msg error when don´t found a dog", async ()=> {
            const response = await request(server).get("/dogs/6969696969")
            expect(response.body).toStrictEqual({msg: "Don´t exist a dog with this ID"})
        })
    })

    describe("When send a correct Id", ()=> {
        describe("The dog is in API:", ()=> {
            let expectData = {
                "id": 149,
                "name": "Labrador Retriever",
                "height_min": 55,
                "height_max": 62,
                "weight_min": 25,
                "weight_max": 36,
                "min_life": 10,
                "max_life": 13,
                "temperaments": [
                "Kind",
                "Outgoing",
                "Agile",
                "Gentle",
                "Intelligent",
                "Trusting",
                "Even Tempered"
                ],
                "img_Url": "https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg",
                "bred_for": "Water retrieving",
                "breed_group": "Sporting"
                }


            it("Responds with 200", async ()=> {
                const response = await request(server).get("/dogs/149")
                expect(response.statusCode).toBe(200)
            })

            it("Responds with a correct data, in this case about Labrador Retriver", async()=>{
                const response = await request(server).get("/dogs/149")
                expect(response.body).toStrictEqual(expectData)
            })
        });

        describe('The dog is in DataBase', () => {
            let createDogDB = {name: "Firulais", height_min: 5,height_max: 30, weight_min: 10,weight_max: 20,min_life: 10, max_life: 20, temperaments: []}

            let expectData = {"height_max": 30, "height_min": 5, "max_life": 20, "min_life": 10, "name": "Firulais", "temperaments": [], "weight_max": 20, "weight_min": 10}
            
            beforeAll(()=>{
                Dog.create(createDogDB)
            })

            afterAll(()=> {
                Dog.sync({force: true})
            })

            it("Responds with 200 status code", async ()=>{
                let dogFound = await Dog.findOne({where: {name: "Firulais"}})
                let id = dogFound.id
                const response = await request(server).get(`/dogs/${id}`)
                console.log(response)
                expect(response.statusCode).toStrictEqual(200)
            })

            it("Responds with a correct data", async ()=>{
                let dogFound = await Dog.findOne({where: {name: "Firulais"}})
                let id = dogFound.id
                const response = await request(server).get(`/dogs/${id}`)
                console.log(response)
                expect(response.body).toMatchObject(expectData)
            })

        })
    })
});




    