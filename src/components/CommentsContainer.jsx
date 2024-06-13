/**
 * 
 *  This file is an example of nested level comments display. This is not a real data, it is custom data to learn how to render nested comments.
 */

import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const commentsData = [
    {
        name: 'Baibhav Saxena',
        text: 'this is a dummy comment',
        replies: [],
    },
    {
        name: 'Baibhav Saxena',
        text: 'this is a dummy comment',
        replies: [
            {
                name: 'Baibhav Saxena Nested',
                text: 'this is a dummy Nested comment',
                replies: [],
            },
            {
                name: 'Baibhav Saxena Nested',
                text: 'this is a dummy Nested comment',
                replies: [
                    {
                        name: 'Baibhav Saxena Nested level 3',
                        text: 'this is a dummy Nested level 3 comment',
                        replies: [
                            {
                                name: 'Baibhav Saxena Nested level 4',
                                text: 'this is a dummy Nested level 4 comment',
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Baibhav Saxena',
        text: 'this is a dummy comment',
        replies: [
            {
                name: 'Baibhav Saxena Nested',
                text: 'this is a dummy Nested comment',
                replies: [
                    {
                        name: 'Baibhav Saxena Nested level 3',
                        text: 'this is a dummy Nested level 3 comment',
                        replies: [],
                    },
                ],
            },
            {
                name: 'Baibhav Saxena Nested',
                text: 'this is a dummy Nested comment',
                replies: [],
            },
            {
                name: 'Baibhav Saxena Nested',
                text: 'this is a dummy Nested comment',
                replies: [
                    {
                        name: 'Baibhav Saxena Nested level 3',
                        text: 'this is a dummy Nested level 3 comment',
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: 'Baibhav Saxena',
        text: 'this is a dummy comment',
        replies: [],
    },
]

const CommentSection = ({data}) => {
    const {name, text} = data;

    return(
        <div className='flex w-3/4 rounded-lg bg-blue-50 m-2'>
            <div className='mr-3'>
                <AccountCircleIcon />
            </div>
            <div>
                <p>{name}</p>
                <p>{text}</p>
            </div>       
        </div>
    )
}

const CommentsList = ({comments}) => {
    return(
        <div>
            {comments.map((item,index)=>(
                <div>
                    <CommentSection data={item} key={index} />

                    <div className='ml-5'>
                        <CommentsList comments={item.replies} />
                    </div>
                </div>
            ))}
        </div>
    )
}

const CommentsContainer = () => {
    return ( 
        <div>
            {/* {commentsData.map((item,index)=> <CommentSection data = {item} key={index} />)} */}
            {/* <CommentSection data = {commentsData[0]} /> */}
            <CommentsList comments={commentsData} />
        </div>
     );
}
 
export default CommentsContainer;