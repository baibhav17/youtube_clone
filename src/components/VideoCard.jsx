import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({videoData}) => {
    const {snippet, statistics} = videoData;
    const {channelTitle, title, thumbnails } = snippet;

    const { viewCount } = statistics;
    return ( 
        // <div className='flex flex-wrap'>
        //     {data.map((item)=> <Link  key={item.id} to={'watch?v='+item.id}> <div className='w-auto p-4 m-8 border border-transparent shadow-lg '>
        //         <img className='rounded-xl' src={item.snippet.thumbnails.medium.url} />
        //         <ul>
        //             <li>{item.snippet.title}</li>
        //             <li className='text-gray-400'>{item.snippet.channelTitle}</li>
        //             <li className='text-gray-400'>{item.statistics.viewCount} views</li>
        //         </ul>
        //         {/* <h5 className='text-gray-400'>channel:{item.snippet.channelTitle}</h5>
        //         <div>Title:{item.snippet.title}</div>
        //         <div>
        //             <div>views: {item.statistics.viewCount}</div>
        //             <div>Likes: {item.statistics.likeCount}</div>
        //             <div>Comments: {item.statistics.commentCount}</div>
        //         </div> */}
        //     </div> </Link>
        //     )}
        // </div>
        <div className='p-2 m-2 w-72 h-[400px] shadow-lg'>
            <img src={thumbnails.medium.url} alt='video-thumbnail' />
            <ul>
                <li>{title}</li>
                <li className='text-gray-400'>{channelTitle}</li>
                <li className='text-gray-400'>{viewCount} views</li>
            </ul>
        </div>
     );
}
 
export default VideoCard;