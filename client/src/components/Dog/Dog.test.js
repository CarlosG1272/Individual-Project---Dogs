import Dog from ".";
import React from "react"
// Que es extend expect XD
import "@testing-library/jest-dom/extend-expect"
import { render} from "@testing-library/react"

import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../store/index"

describe("<Dog />", () => {
    describe("Must be render the correct information when send a property", ()=> {
        let props = {
            id: 10,
            name: "Dog Test",
            temperaments: ["test1", "test2", "test3"],
            img_Url: "https://i.imgur.com/0Yt88uz.jpg",
            height_min: 10,
            height_max: 25,
            weight_min: 15,
            weight_max: 35,
            deleteDog: ()=> {},       
        }

        let component
        beforeEach(()=> {
            component = render(
            <Provider store={store}>
                <BrowserRouter>
                <Dog 
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


        it("Must be render the section description", ()=> {
           component.getByTestId("description")
           
        })
        // it("Must be render a delete button", ()=> {
        //     component.getByText("Delete")
        // })
       it("Must be render the temperaments how a sentece", ()=> {
            let temperaments = component.getByTestId("temperament")
            expect(temperaments).toHaveTextContent("Temperament: test1, test2, test3")
        })

        it("Must be render the name", ()=> {
            let name = component.getByTestId("name")
            expect(name).toHaveTextContent("Dog Test")
        })

        it("Must be render weight", ()=> {
            let weight = component.getByTestId("weight")
            expect(weight).toHaveTextContent("Weight: 15 - 35 lb")
        })

        it("Must be render height", ()=> {
            let height = component.getByTestId("height")
            expect(height).toHaveTextContent("Height: 10 - 25 inches")
        })
    })
});