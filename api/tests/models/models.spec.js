const { Dog, conn } = require('../../src/db.js');

xdescribe('Dog model', () => {
  beforeAll(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));

    // para no estar repitiendo mejor creo un array de datos y luego solo uso dependiendo a su posición
    let goodData = [{name: "Firulais", height_min: 5,height_max: 30, weight_min: 10,weight_max: 20,min_life: 10, max_life: 20}]

    let invalidName = [{name: 10, height_min: 5,height_max: 30, weight_min: 10,weight_max: 20,min_life: 10, max_life: 20}]

    let invalidHeight = [{name: "Firulais", height_min: -10,height_max: 0, weight_min: 10,weight_max: 20,min_life: 10, max_life: 20}]

    let invalidWeight = [{name: "Firulais", height_min: 5,height_max: 30, weight_min: -10,weight_max: 10000,min_life: 10, max_life: 20}]

    let emptyHeight = [{name: "Firulais", weight_min: -10,weight_max: 10000,min_life: 10, max_life: 20}]

    describe('name', () => {

        describe('return errors when send empty or invalid data', ()=>{

            it('should throw an error if name is null', (done) => {
                Dog.create({})
                  .then(() => done(new Error('It requires a valid name')))
                  .catch(() => done());
              });
        
              it('if recive a invalid name, return an error',(done)=>{
                  Dog.create(invalidName)
                  .then(()=> done(new Error("Invalid datatype")))
                  .catch(()=> done())
              })
        })
        describe('should work whent its a valid data', ()=> {
            it('should work when its a valid name', () => {
                Dog.create(goodData);
            });
        })
      
    });

    describe('height', ()=> {
        it('should throw an error if height min is null', (done)=> {
            Dog.create(emptyHeight)
            .then(()=> done(new Error("must not be an empty value")))
            .catch(()=>done())
        })
        it('should return an error if the value is invalid', (done)=> {
            Dog.create(invalidHeight)
            .then(()=> done(new Error("the values are invalid")))
            .catch(()=>done())
        })
    })
  });


 
  
});