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

