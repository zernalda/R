import React from 'react';

// the props object is the argument
const VideoList = (props) => {

    return (
        <ul className="col-md-4 list-group">
            { props.videos.length }
        </ul>
    ); 
};

export default VideoList;