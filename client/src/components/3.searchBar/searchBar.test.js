import React from "react"

import { render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import SearchBar from "./index"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../store/index"


describe("<SearchBar />", ()=> {
    let component
    beforeEach(() => {
        component = render(<Provider store={store}>
            <BrowserRouter>
            <SearchBar />
            </BrowserRouter>
        </Provider>)
    });
    it("Must be render all filter buttons", ()=> {  
        component.getByText('Height-min')
        component.getByText('Height-max')
        component.getByText('Weight-min')
        component.getByText('Weight-max')
    })
    it("Must be render two empty select items", ()=> {
        let select = component.getAllByText('empty')
        expect(select.length).toEqual(2)
    })
    it("Must be render a button to submit for breed filter", ()=> {
        component.getByDisplayValue("Search")
    })
    it("Must be render the select list ", ()=> {
        component.getByText("Filtered")
        component.getByText("Clean")
    })
        
})