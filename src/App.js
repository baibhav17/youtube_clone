import { useContext, useState } from 'react';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import showSideBarContext from './utils/showSideBarContext';
import { Provider } from 'react-redux';
import appStore from './utils/stateManagement/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';
import UseMemoDemo from './components/UseMemoDemo';
import SearchResult from './components/SearchResult';

function App() {
  const { sideBarVisible } = useContext(showSideBarContext)
  const [showSideBar, setShowSideBar] = useState(sideBarVisible)

  const appRouter = createBrowserRouter([{
    path:'/',
    element:  <Body showSideBar={showSideBar}/>,
    children: [
      {
      path:'/',
      element: <MainContainer />
    },
    // {
    //   path:'/',
    //   element: <Head setShowSideBar={setShowSideBar} showSideBar={ showSideBar } />
    // },
    {
      path: '/watch',
      element: <Watch />
    },
    {
      path: '/useMemoDemo',
      element: <UseMemoDemo />
    },
    {
      path: '/result',
      element: <SearchResult />
    }
  ]
  }])

  return (
    <Provider store={appStore} >
      <showSideBarContext.Provider value={sideBarVisible}>
        <div className='text-2xl '>
        {/* <Head setShowSideBar={setShowSideBar} showSideBar={ showSideBar } /> */}
       <RouterProvider router={appRouter} />
      </div>
      </showSideBarContext.Provider>
    </Provider>
    
  );
}

export default App;
