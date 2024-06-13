import React from 'react';
import FilterButtonList from './FilterButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
    return ( 
        <div className='overflow-x-scroll'>
            <FilterButtonList />
            <VideoContainer />
        </div>
     );
}
 
export default MainContainer;