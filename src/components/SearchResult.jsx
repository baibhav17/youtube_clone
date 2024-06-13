import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResultCard = ({data}) => {
    console.log('searchData',data)
    const {snippet} = data;
    const {title, channelTitle, description, thumbnails} = snippet
    return(
        <div data-testid='search-result-card' className='flex my-3 p-2 border border-gray-100 rounded-md bg-slate-50'>
            <div>
            <img src={thumbnails.default.url} alt='result-img' />
            </div>
            <ul className='mx-2'>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{description}</li>
            </ul>
        </div>
    )
}

const SearchResult = () => {
    const searchData = useSelector((state)=>state.searchResult.searchData[0])
    console.log('searchData---1',searchData)
   

    return ( 
        <div>
            {
                searchData && searchData.map((item)=> <Link key={item.id.videoId}  to={'/watch?v='+item.id.videoId} >
                    <SearchResultCard key={item.etag} data = {item} />
                    </Link>)
            }
        </div>
     );
}
 
export default SearchResult;