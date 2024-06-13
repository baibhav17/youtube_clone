export const YOUTUBE_API_KEY = 'YOUR_API_KEY';
export const YOUTUBE_API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+YOUTUBE_API_KEY;

export const YOUTUBE_AOTUCOMPLETE_API_URL = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const YOUTUBE_SEARH_RESULT = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key='+YOUTUBE_API_KEY+'&q=';