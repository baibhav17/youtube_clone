import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChatData, clearChatData } from '../utils/stateManagement/liveChatSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { generateRandomName, generateRandomString } from '../utils/helper';

const LiveChatList = ({data}) => {
    const {name, text} = data
    return(
        <div className='flex items-center'>
            <AccountCircleIcon />
            <p className='px-1 text-gray-500'>{name}</p>
            <p className='mx-1'>{text}</p>
        </div>
    )
}



const LiveChat = () => {
    const userData = {
        name: 'baibhav Saxena',
        text: 'hello this is a live chat window'
    }

    const dispatch = useDispatch()

    const liveChatData = useSelector((state)=>state.liveChat.liveChatData)
    console.log('liveChatData',liveChatData)

    

    useEffect(()=>{
        const chatInterval = setInterval(()=>{
            console.log(userData.name)
            // dispatch(addChatData(userData))
            dispatch(addChatData({
                name:generateRandomName(),
                text: generateRandomString(20),
            }))

        },1500)

        return ()=>{
            clearInterval(chatInterval);
            dispatch(clearChatData())
        }
    },[])

    if(liveChatData.length == 0) return;

    return ( 
        <>
         <div className='bg-slate-50 overflow-y-scroll'>
            {
                liveChatData.map((item,index)=><LiveChatList data={item} key={index} />)
            }
        </div>
        
        </>
       
            
     );
}
 
export default LiveChat;