// import react library
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import YTSearch from 'youtube-api-search';

//import API Key
const API_KEY = 'AIzaSyBkoBm6ycFrKTPgknrm8xcr1BRdjoja0lU';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
});


// buat component baru
// this componnent should be produce in html

// const is a final, it must be never change
const App = () => {
    return (
        <div>
            <SearchBar />
            <VideoList />
            <VideoListItem />
        </div>
    );
}

// take this component generate html and put it
// on the page (in DOM)
//karena di index.js kita mau masukain ke class 'container'
ReactDOM.render( <App />, document.querySelector('.container') );