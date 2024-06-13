import React from 'react';
import ButtonList from './ButtonList';

const FilterButtonList = () => {
    const buttonNamesList = ['All', 'Music', 'Cricket', 'Football', 'News', 'Travelling', 'Cooking', 'Games', 'Coding', 'DIY', 'Spritual', 'Comdey', 'Mantras']
    return ( 
        <div className='flex overflow-x-scroll'>
            {buttonNamesList.map((item, index)=> <ButtonList name={item} key={index+item}/>)}
        </div>
     );
}
 
export default FilterButtonList;