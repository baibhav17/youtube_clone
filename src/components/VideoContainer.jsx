import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videoList, setVideoList] = useState([])
    useEffect(()=>{
        fetchYoutubeData();
    },[])
    const fetchYoutubeData = async () => {
        const response = await fetch(YOUTUBE_API_URL);
        const data = await response.json();
        setVideoList(data.items)
    }
    // console.log('videoList',videoList)
    return ( 
        <div className='flex flex-wrap'>
            {videoList.map((video)=>(
               <Link key={video.id}  to={'watch?v='+video.id} ><VideoCard videoData={video} /></Link> 
            ))}
            {/* <VideoCard data={videoList} /> */}
        </div>
     );
}
 
export default VideoContainer;