import React from "react"
import "@testing-library/jest-dom/extend-expect"
import {render} from "@testing-library/react"

import LandingPage from "./index"
import { BrowserRouter } from "react-router-dom"


describe("Testing LANDING PAGE", ()=> {
    let component
    beforeEach(()=>{
        component = render(<BrowserRouter><LandingPage /></BrowserRouter>)
    })
    it("The component is render correctly the title", () => {
        expect(component.container).toHaveTextContent("Hi! Welcome to this FULL STACK DOG APPLICATION.")
    }); 

    it("Render correctly the description", ()=> {

        component.getByText("Learn more about your best friend!")
    })

    it("Dog image render correctly", ()=> {
        let image = component.getByAltText("mainDog")
        expect(image.width).toEqual(400)
    })
    it("FingerPrint icon render correctly", ()=> {
      
        let image = component.getByAltText("fingerprint-icon")
        expect(image.width).toEqual(150)

    })

})

