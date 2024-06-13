import React from 'react';

const ButtonList = ({name}) => {
    return ( 
        <div>
            <button className='rounded-full bg-gray-700 px-5 py-2 m-2'>{name}</button>
        </div>
     );
}
 
export default ButtonList;