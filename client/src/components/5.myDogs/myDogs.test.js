import React from "react"
import { render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../store/index"
import CardDog from "./cardDog"

describe("<MyDogs />", () => {
    describe("Must be render the correct information when send a property", ()=> {
        let props = {
            id: 20,
            name: "My Dog Test",
            temperaments: ["temp1", "temp2", "temp3"],
            img_Url: "https://i.imgur.com/0Yt88uz.jpg",
            height_min: 20,
            height_max: 50,
            weight_min: 18,
            weight_max: 70,
            deleteDog: ()=> {},       
        }

        let component
        beforeEach(()=> {
            component = render(
                <Provider store={store}>
                <BrowserRouter>
                <CardDog 
                key={props.id}
                id={props.id} 
                name={props.name}
                temperaments={props.temperaments}
                img_Url={props.img_Url}
                height_min={props.height_min}
                height_max={props.height_max}
                weight_min={props.weight_min}
                weight_max={props.weight_max}
                />
                </BrowserRouter>
            </Provider>)
        })


        it("Must be render the general container", ()=> {
           component.getByTestId("container")  
        })
        it("Must be render the section description", ()=> {
            component.getByTestId("description") 
         })

       it("Must be render the temperaments how a sentece", ()=> {
            let temperaments = component.getByTestId("temperament")
            expect(temperaments).toHaveTextContent("Temperament: temp1, temp2, temp3")
        })

        it("Must be render the name", ()=> {
            let name = component.getByTestId("name")
            expect(name).toHaveTextContent("My Dog Test")
        })

        it("Must be render weight", ()=> {
            let weight = component.getByTestId("weight")
            expect(weight).toHaveTextContent("Weight: 18 - 70 lb")
        })

        it("Must be render height", ()=> {
            let height = component.getByTestId("height")
            expect(height).toHaveTextContent("Height: 20 - 50 inches")
        })
    })
});