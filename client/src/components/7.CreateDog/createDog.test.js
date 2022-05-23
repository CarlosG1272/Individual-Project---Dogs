import { validationsForm } from "./validationFunction";


describe("<Create Dog/>", ()=> {
    const incompleteData = {
        name: "",
        height_min: 0,
        height_max: 0,
        weight_min: 0,
        weight_max: 0,
        min_life: 0,
        max_life: 0,
        temperaments: []}

    const invalidData = {
        name: "123",
        height_min: 300,
        height_max: 5,
        weight_min: 300,
        weight_max: 5,
        min_life: 300,
        max_life: 5,
        temperaments: []}    
    
    const expectErrorEmpty = {
        name: "Name is required",
        height_min: "Height min is required",
        height_max: "Height max is required",
        weight_min: "Weight min is required",
        weight_max: "Weight max is required",
        min_life: "Min life span is required",
        max_life: "Max life  is required",
    }

    const expectErrorInvalid = {
        name: "Name must be more to 3 letters",
        height_min: "Height min cannot be less than 0 or greater than 75 inches",
        height_max: "Height max cannot be less than min height",
        weight_min: "Weight min cannot be less than 0 or greater than 200 punds",
        weight_max: "Weight max cannot be less than min height",
        min_life: "Min life cannot be less than 0 or greater than 20 years",
        max_life: "Max life cannot be less than min height",
    }
    it("If is empty must be return the expect object errors", ()=> {
        let errorReturn = validationsForm(incompleteData)
        expect(errorReturn).toStrictEqual(expectErrorEmpty)
    })

    it("If the data is invalid return the expect object errors", ()=> {
        let errorReturn = validationsForm(invalidData)
        expect(errorReturn).toStrictEqual(expectErrorInvalid)
    })
})