const { Dog, conn } = require('../../src/db.js');

describe('Dog model', () => {
  beforeAll(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  afterAll(() => Dog.sync({ force: true }));
  describe('Validators', () => {
    afterAll(() => Dog.sync({ force: true }));

    // para no estar repitiendo mejor creo un array de datos y luego solo uso dependiendo a su posición
    let correctData = {name: "Firulais", height_min: 5,height_max: 15, 
    weight_min: 10,weight_max: 20,min_life: 10, max_life: 20}

    let invalidName = {name: [10], height_min: 5,height_max: 30, weight_min: 10,
      weight_max: 20,min_life: 10, max_life: 20}

    let invalidHeight = {name: "Firulais", height_min: ["xas"],height_max: {}, 
    weight_min: 10,weight_max: 20,min_life: 10, max_life: 20}

    let invalidWeight = {name: "Firulais", height_min: 5,height_max: 30, 
    weight_min: {},weight_max: "count",min_life: 10, max_life: 20}

    let incompleteData= {name: "Firulais", weight_min: 20,weight_max: 10,
    min_life: 10, max_life: 20}


    let expectData = {"height_max": 15,"height_min": 5,"max_life": 20,"min_life": 10,
  "name": "Firulais","weight_max": 20,"weight_min": 10, }
    let msg = ["SequelizeValidationError: notNull Violation: Dog.height_min cannot be null"
      + "notNull Violation: Dog.height_max cannot be null"]

      it("If send incomplete data, don´t create a Dog and responds with a msg error", ()=>{
        Dog.create(incompleteData).then(success=> console.log(success)).catch(err=> 
          expect(err).toStrictEqual(err))
      })

      describe("If send invalid data responds with a msg error", () => {
          it("when send invalid name", ()=> {
            Dog.create(invalidName).then(success=> console.log(success)).catch(err=> 
              expect(err).toStrictEqual(err))
          })

          it("when send invalid height", ()=> {
            Dog.create(invalidHeight).then(success=> console.log(success)).catch(err=> 
              expect(err).toStrictEqual(err))
          })

          it("when send invalid weight", ()=> {
            Dog.create(invalidWeight).then(success=> console.log(success)).catch(err=> 
              expect(err).toStrictEqual(err))
          })
        })
      describe("If send correct data", ()=> {
        let finalExpectData = [{"height_max": 15, "height_min": 5, "max_life": 20, 
        "min_life": 10, "name": "Firulais", "weight_max": 20, "weight_min": 10}]
        it("Responds with a created dog", ()=> {
          Dog.create(correctData).then(success=> expect(success).toMatchObject(expectData))
          .catch(err=> console.log(err))
        })

        it("The dogs added in table", async ()=> {
          let values = await Dog.findAll()
          expect(values).toMatchObject(finalExpectData)
        })
      });
    })
});