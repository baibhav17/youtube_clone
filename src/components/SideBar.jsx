import React from 'react';
import showSideBarContext from '../utils/showSideBarContext';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SideBar = () => {
    const showSideBarMenu = useSelector((state)=>state.sideBar.showSideBar)
    if(!showSideBarMenu) return;

    return ( 
        <div className='col-span2 p-5 shadow-lg text-lg'>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/useMemoDemo'>Demo </Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
          </ul>
          <h3 className='font-bold'>You</h3>
          <ul>
            <li>History</li>
            <li>Watch Later</li>
            <li>Playlsit</li>
            <li>Liked Videos</li>
          </ul>
          <h3 className='font-bold'>Explore</h3>
          <ul>
            <li>Trending</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Gaming</li>
          </ul>
          
        </div>
     );
}
 
export default SideBar;