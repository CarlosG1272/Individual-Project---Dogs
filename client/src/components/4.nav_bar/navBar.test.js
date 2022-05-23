import React from "react"
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import NavBar from "./index"
import { BrowserRouter } from "react-router-dom"


describe("<NavBar />", ()=> {
    let component
    beforeEach(()=> {
        component = render(
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
        )
    })
    it("Must be render section LandingPage", ()=> {
        component.getByText("LandingPage")
    })
    it("Must be render section 'Home'", ()=> {
        component.getByText("Home")
    })
    it("Must be render section 'My dogs'", ()=> {
        component.getByText("My dogs")
    })
    it("Must be render section 'Create Dog", ()=> {
        component.getByText("Create Dog")
    })
    it("Must be render section 'Favorites'", ()=> {
        component.getByText("Favorites")
    })
    it("Must be render section 'About'", ()=> {
        component.getByText("About")

    })
})