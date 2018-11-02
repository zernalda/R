import React from 'react';
// import VideoListItem from './components/VideoListItem';
import VideoListItem from './video_list_item';

// the props object is the argument
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => { 
        // cara dapetin key = network-name-all-preview
            return (
                <VideoListItem 
                    onVideoSelect = {props.onVideoSelect}
                    key={video.etag} 
                    video={video} 
                />      
            );
        });

    return (
        <ul className="col-md-4 list-group">
            { videoItems }
        </ul>
    ); 
};

export default VideoList;