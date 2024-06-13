import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../utils/stateManagement/sideBarSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_API_KEY } from '../utils/constant';
import Comments from './Comments';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { addChatData } from '../utils/stateManagement/liveChatSlice';

const Watch = () => {
    const dispatch = useDispatch();
    const [searchVideoParam] = useSearchParams();
    const video_Id = searchVideoParam.get('v')
    const [commentsList, setCommentsList] = useState([]);
    const [liveMessage, setLiveMessage] = useState('')

    useEffect(() => {
        dispatch(closeSideBar())
        fetchComments()
    }, [])

    const fetchComments = async () => {
        const commentsResponse = await fetch('https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=' + video_Id + '&key=' + YOUTUBE_API_KEY)
        const commentsData = await commentsResponse.json();
        setCommentsList(commentsData.items)
    }

    return (
        <div className='flex flex-col justify-evenly'>
            <div className='px-5 flex '>
                <div>
                    <iframe
                        width="1200"
                        height="600"
                        src={"https://www.youtube.com/embed/" + video_Id}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className='border border-black mx-2 h-full'>
                    <h4 className='font-bold my-1 mx-auto text-center'>Live chat</h4>
                    <div className='   h-[400px] flex flex-col-reverse overflow-y-scroll'>
                        <LiveChat />
                    </div>
                    <form className='border border-black' onSubmit={(e)=>{
                        e.preventDefault();
                        console.log('liveMessage',liveMessage)
                        dispatch(addChatData({
                            name:'baibhav Saxena',
                            text: liveMessage
                        }))
                        setLiveMessage('')
                        
                    }}>
                        <input type='text' className='px-2 py-1 w-80 chat-submit-input' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
                        <button className='bg-green-100 rounded-lg px-1 mx-2' >submit</button>
                    </form>
                </div>

                <br />
            </div>
            <div>
                <h2 className='font-bold'>Comments:</h2>
                <CommentsContainer />
            </div>
            {/* <Comments commentsList={commentsList} /> */}

            <div className='w-3/4'>
                {commentsList.map((item) => (
                    <Comments key={item.id} commentsList={item} />
                ))}
            </div>


        </div>


    );
}

export default Watch;