import React, { useContext } from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';
import Head from './Head';

const Body = ({showSideBar}) => {

    return ( <>
     <Head />
     <div className='flex'>
        {/* for prop drilling by lifting the state up */}
          {/* {showSideBar && <SideBar /> } */}
          <SideBar />
          <Outlet />
        </div>
    </>
       
     );
}
 
export default Body;