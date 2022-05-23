import selectTemperament from "./selectFunction";
// Esta funcion es para el SearchBar, como cb del filter
describe("<Select List/> Function", ()=> {
    let elements = [
        {name: "Test1", temperaments: ["Playful", "Curious", "Brave"]}, 
        {name: "Test2", temperaments: ["Aggresive", "Adventus", "Brave"]},
        {name: "Test3", temperaments: ["Curious", "Strong", "Brave"]},
        {name: "Test4", temperaments: ["Curious", "Playful", "Brave"]}
    ]

    let test1 = ["Brave"]
    let expectData1 = [
    {name: "Test1", temperaments: ["Playful", "Curious", "Brave"]}, 
    {name: "Test2", temperaments: ["Aggresive", "Adventus", "Brave"]},
    {name: "Test3", temperaments: ["Curious", "Strong", "Brave"]},
    {name: "Test4", temperaments: ["Curious", "Playful", "Brave"]}]

    let test2 = ["Adventus", "Brave"]
    let expectData2 = [{name: "Test2", temperaments: ["Aggresive", "Adventus", "Brave"]}]

    let test3 = ["Curious", "Brave"]
    let expectData3 = [{name: "Test1", temperaments: ["Playful", "Curious", "Brave"]},
    {name: "Test3", temperaments: ["Curious", "Strong", "Brave"]},
    {name: "Test4", temperaments: ["Curious", "Playful", "Brave"]} ]

    let test4 = ["Curious", "Playful", "Brave"]
    let expectData4 = [
        {name: "Test1", temperaments: ["Playful", "Curious", "Brave"]},
        {name: "Test4", temperaments: ["Curious", "Playful", "Brave"]} 
    ]


    it("Test 1: ", ()=> {
        let result1 = elements.filter(el=>selectTemperament(el, test1))
        expect(result1).toStrictEqual(expectData1)
    })

    it("Test 2: ", ()=> {
        let result2 = elements.filter(el=>selectTemperament(el, test2))
        expect(result2).toStrictEqual(expectData2)
    })

    it("Test 3: ", ()=> {
        let result3 = elements.filter(el=> selectTemperament(el, test3))
        expect(result3).toStrictEqual(expectData3)
    })

    it("Test 4: ", ()=> {
        let result4 = elements.filter(el=> selectTemperament(el, test4))
        expect(result4).toStrictEqual(expectData4)
    })
})