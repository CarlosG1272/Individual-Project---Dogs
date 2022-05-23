import React from "react"

import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Detail from "./index"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../store/index"

describe("<Detail /> ", ()=> {

        let component 
        beforeEach(() => {
            component = render(
                <Provider store = {store}>
                    <BrowserRouter>
                        <Detail />
                    </BrowserRouter>
                </Provider>)
        });
        it("must be render a container of detail", ()=> {
            component.getByTestId("container") 
        })    

        it("must be render a container of description", ()=> {
            component.getByTestId("description") 
        })    

        it("must be render physic section", ()=>{
            let value = component.getByTestId("Physical")
            expect(value).toHaveTextContent("Physical characteristics")
        })
        it("must be render height section", ()=>{
            let value = component.getByTestId("Height")
            expect(value).toHaveTextContent("Height:")
        })

        it("must be render weight section", ()=> {
            let value = component.getByTestId("Weight")
            expect(value).toHaveTextContent("Weight:")
        })
        it("must be render Breed characteristics", ()=>{
            let value = component.getByTestId("Breed")
            expect(value).toHaveTextContent("Breed characteristics")
        })
        it("must be render Temperament section", ()=> {
            let value = component.getByTestId("temperaments")
            expect(value).toHaveTextContent("TEMPERAMENTS")
        })

})









// it("Must be renders more information button", ()=> {
//     component.findByText("More information")
// })
// it("renders the title", ()=> {
//     component.findByText("Physical characteristics")
    
// })
// it("Must be render 'Height section'", ()=> {
//     component.findByText("Height:")
// })

// it("Must be render 'Weight section'", ()=> {
//     component.findByText("Weight:")
// })
// it("Must be render 'Life span section'", ()=> {
//     component.findByText("Life span:")
// })

// it("Render a img with alt text 'Back'", ()=>{
//     component.findByAltText("Back")
// })

// })
    // describe("Must be renders section 'Breed characteristics'", ()=> {
    //     let component
    //     beforeEach(()=> {
    //         component = render(
    //         <Provider store = {store}>
    //             <BrowserRouter>
    //                 <Detail />
    //             </BrowserRouter>
    //         </Provider>)
    //     })
    //     it("Renders the title", ()=> {
    //         component.getByText("Breed characteristics")
    //     })
    //     it("Must be render 'Origin section'", ()=> {
    //         component.getByText("comes from")
    //     })
    //     it("Must be render Breed for section", ()=>{
    //         component.getByText("This breed is characterized by being")
    //     })
    //     it("Must be render the Group Breed Section", ()=> {
    //         component.getByText("The group to which it belongs is considered")
    //     })
    // })

    // describe("Must be renders the 'Temperaments Section'", ()=> {
    //     let component = render(
    //         <Provider store = {store}>
    //             <BrowserRouter>
    //                 <Detail />
    //             </BrowserRouter>
    //         </Provider>)
    //     component.getByText("TEMPERAMENTS")
    // })
   
