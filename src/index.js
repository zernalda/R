// import react library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

//import API Key
const API_KEY = 'AIzaSyBkoBm6ycFrKTPgknrm8xcr1BRdjoja0lU';

// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
//     console.log(data);
// });


// buat component baru
// this componnent should be produce in html

// create class app component
// devine constructor function
class App extends Component{
    // inisialisasi state
    constructor(props) {
        super(props);
        // property dari state 'videos'
        // videos = list dari video
        this.state = { 
            videos: [],
            // start video
            selectedVideo : null
         };

        // term is what you need to search top 5 in youtube
        YTSearch( {key: API_KEY, term: 'champions league'}, (videos) => {
            // callback function
            this.setState( { 
                videos: videos,
                 selectedVideo: videos[0]
            } );
        } );
    }

        
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect= { selectedVideo => this.setState({selectedVideo}) }
                    videos= {this.state.videos}
                />
            </div>
        );
    }
}

// const is a final, it must be never change
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//             <VideoList />
//             <VideoListItem />
//         </div>
//     );
// }

// take this component generate html and put it
// on the page (in DOM)
//karena di index.js kita mau masukain ke class 'container'
ReactDOM.render( <App />, document.querySelector('.container') );