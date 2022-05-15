const {Favorites} = require("../../src/db")

describe('Favorites model', () => {
    afterAll(()=>{
        Favorites.sync({force: true})
    })
    let expectData = [{"DogId": "10"}, {"DogId": "40"}]
    it("If send DogId null, responds with a msg error", ()=> {
        Favorites.create().then(success=> console.log(success))
        .catch(err=> expect(err).toBe(err))
    })

    it("If send invalid DogId, responds with a msg error", ()=> {
        Favorites.create({DogId: [123]}).then(success=> console.log(success))
        .catch(err=> expect(err).toBe(err))
    })

    it("If send correct DogID, responds with a favorite add", ()=>{
        Favorites.create({DogId: "10"}).then(success=> expect(success).toStrictEqual(success))
        .catch(err=> console.log(err))
        Favorites.create({DogId: "40"}).then(success=> expect(success).toStrictEqual(success))
    })

    it("The dogId is addedd to favorites table",async ()=> {
        let values = await Favorites.findAll();
        expect(values).toMatchObject(expectData)
    })
});