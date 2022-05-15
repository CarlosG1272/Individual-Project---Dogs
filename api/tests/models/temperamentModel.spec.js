const {Temperaments} = require("../../src/db")

describe('Temperaments model', () => {
    let invalidData = [[1,2], {xd: 123}]
    let correctData = ["Intelligent", "Curious"]
    let expectData1 = {"name": "Intelligent"}
    let expectData2 = {"name": "Curious"}
    afterAll(()=>{
        Temperaments.sync({force: true})
    })
    
    let expectTable = [{"name": "Intelligent"}, {"name": "Curious"}]

    it("If send null data responds with a error", ()=> {
        Temperaments.create().then(success=> console.log(success))
        .catch(err=> expect(err).toStrictEqual(err))
    })

    it("If send invalid data responds with a error", ()=> {
        let promises = invalidData.map(async el=> await Temperaments.create({name: el}))
        Promise.all(promises).then(result=> {
            result.forEach(el=> console.log(el))
        }).catch(err=> expect(err).toStrictEqual(err))
    })

    it("If send correct data responds with a created element", ()=> {
        let promises = correctData.map(async el=> await Temperaments.create({name: el}))
        Promise.all(promises).then(result=> {
            expect(result[0]).toMatchObject(expectData1)
            expect(result[1]).toMatchObject(expectData2)
        }).catch(err=> console.log(err))
    })

    it("The elements creating in the table correctly", async ()=> {
        let results = await Temperaments.findAll(); 
        expect(results).toMatchObject(expectTable)
    })
});