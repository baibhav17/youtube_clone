import React from 'react';

const Comments = ({commentsList}) => {
    const { snippet } = commentsList
    const {topLevelComment} = snippet
    const {snippet:nested_snippet} = topLevelComment;
    const { authorProfileImageUrl , authorDisplayName, textOriginal } = nested_snippet
    // const { snippet:{topLevelComment:{snippet:{authorProfileImageUrl,authorDisplayName,textOriginal}}} } = commentsList

    console.log('commentsList',topLevelComment)
    return ( 
        <div>
            <ul>
                <li className='flex ml-2 my-4 bg-gray-200 rounded-lg'>
                    <div>
                        <img alt='user-img' src= {authorProfileImageUrl} />
                    </div>
                    <div className='ml-4'>
                        <p>{authorDisplayName}</p>
                        <p>{textOriginal}</p>
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default Comments;