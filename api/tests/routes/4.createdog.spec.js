const server = require("../../src/app")
const request = require("supertest")
const {Dog} = require("../../src/db")


describe("Create Dog in DataBase",()=> {
    afterAll(()=>{
        Dog.sync({force: true})
    })
    describe("POST /dog", () => {
            let invalidData = {name: 10, 
                height_min: "hi", 
                height_max: "xd", 
                weight_min: "wtf", 
                weight_max: "10",
                min_life: 10, 
                max_life: {}, 
                temperaments: "XD"}
            let correctData1 = {
                    name: "Baxer", 
                    height_min: 1, 
                    height_max: 2, 
                    weight_min: 20, 
                    weight_max: 30,
                    min_life: 12, 
                    max_life: 30, 
                    temperaments: ["Intelligent", "Curious"]}
           
            describe("If send empty or invalid data",  () => {  
                it("should be responds with 400 when dont send body", async () => {
                    let response = await request(server).post("/dog").send({})
                    expect(response.statusCode).toBe(400)
                }); 

                it("should be responds with a custom error msg", async () => {
                    let response = await request(server).post("/dog").send({})
                    expect(response.text).toStrictEqual("Incomplete data")
                }); 


                it("should be responds with 400 when send invalid data", async () => {
                    let response = await request(server).post("/dog").send(invalidData)
                    expect(response.statusCode).toBe(400)
                }); 

                it("should be responds with a custom error msg", async()=> {
                    let response = await request(server).post("/dog").send(invalidData)
                    expect(response.body).toBe("SequelizeDatabaseError")
                })
            });
            
            describe("If send correct data", () => {
                it("should be responds whit status code 201", async () => {
                    let response = await request(server).post("/dog").send(correctData1)
                    expect(response.statusCode).toBe(201)
                });

                it("should be responds with a message 'Dog successfully created'", async ()=> {
                    let response = await request(server).post("/dog").send(correctData1)
                    expect(response.body).toStrictEqual({msg: "Dog successfully created"})
                })
            });
        });


    describe("DELETE /dog",  () => {

        describe("If send invalid ID",()=>{
            it("should be responds with status code 500", async ()=> {
                let response = await request(server).delete('/dog?id=nemnsa')
                expect(response.statusCode).toBe(500)
            })
    
            it("should be responds with a message indicating fail in delete", async () => {
                let response = await request(server).delete('/dog?id=nemnsa')
                expect(response.body).toStrictEqual({msg: "Error in delete"})
            });
        }) 
            
        
        describe("If send correct ID", () => {
            // Arriba cree 2 dogs con los mismos datos pero con diferentes ids
            beforeAll(async ()=> {
                dogSelected = await Dog.findAll({where: {name: "Baxer"}})
            })
            it("should be responds with status code 200", async ()=>{  
                let id = dogSelected[0].id;
                let response = await request(server).delete(`/dog?id=${id}`)
                expect(response.statusCode).toBe(200)
            })

            it("should return a message indicating that it was deleted ", async ()=> {
                let id = dogSelected[1].id
                let response = await request(server).delete(`/dog?id=${id}`)
                expect(response.body).toStrictEqual({msg: "deleted dog"})
            })
        });
       
    }); 
})
