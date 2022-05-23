import React from "react"
// Que es extend expect XD
import "@testing-library/jest-dom/extend-expect"
import { render} from "@testing-library/react"

import Favorites from "./index"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../store/index"

describe("<Favorites />", () => {
    let component = render(
    <Provider store={store}>
        <BrowserRouter>
        <Favorites />
        </BrowserRouter>
    </Provider>)
    it("Find a button whit alt text 'Back'", ()=> {
        component.getByAltText("Back")
    })

});