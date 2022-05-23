import React from "react"
// Que es extend expect XD
import "@testing-library/jest-dom/extend-expect"
import { render} from "@testing-library/react"

import Home from "./index"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../store/index"


describe("<HOME />", ()=> {
    let component
    beforeEach(()=>{
        component = render(
            <Provider store={store}>
                <BrowserRouter>
                <Home />
                </BrowserRouter>
            </Provider>
            )
    })
    it("Must be render a searchbar", ()=> {
        component.getByText("Clean")
    })
    it("Must be render a filtered buttons", ()=>{
        component.getByText("Clean Filter")
    })
    })
