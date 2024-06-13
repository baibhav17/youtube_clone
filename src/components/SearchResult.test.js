import { fireEvent, render, screen } from "@testing-library/react"
import Head from "./Head"
import { Provider } from "react-redux"
import { act } from "react";
import appStore from "../utils/stateManagement/appStore"
import MOCK_SEARCH_DATA from '../utils/MOCK_SEARCH_DATA.json';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import SearchResult from "./SearchResult";

beforeEach(()=>{
    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            json:() => {
                return Promise.resolve(MOCK_SEARCH_DATA)
            }
        })
    })
})

it('should render the search result',async ()=>{
    await act(async ()=> render(
        <Provider store={appStore}>
            {/* <BrowserRouter> */}
            <MemoryRouter initialEntries={['/']}>
                    <Head />
                </MemoryRouter>
            {/* </BrowserRouter> */}
        </Provider>
        ))
    

    const searchBar = screen.getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
    const searchBtn = screen.getByTestId('search-btn');
    expect(searchBtn).toBeInTheDocument();
    fireEvent.change(searchBar,{target:{value:'messi'}});
    fireEvent.click(searchBtn);

    await act(async () => {
        render(
            <Provider store={appStore}>
                <MemoryRouter initialEntries={['/result']}>
                    <SearchResult />
                </MemoryRouter>
            </Provider>
        );
    });
const searchResultCard = screen.getAllByTestId('search-result-card').length;
expect(searchResultCard).toBe(25)

})