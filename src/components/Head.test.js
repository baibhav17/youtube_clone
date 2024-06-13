import { render, screen } from "@testing-library/react"
import Head from "./Head"
import { Provider } from "react-redux";
import appStore from "../utils/stateManagement/appStore";
import { BrowserRouter } from "react-router-dom";

it('should have a searchbar',()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Head />
            </BrowserRouter>
        </Provider>
    )
    const searhBarInput = screen.getByTestId('search-bar');
    expect(searhBarInput).toBeInTheDocument();
})