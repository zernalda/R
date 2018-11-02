import React from 'react';

// ({video}) 'dama dengan' const video = props.video;
// post property into object
const VideoListItem = ({video, onVideoSelect}) => {
    // console.log(video);
    
    // define value of video
    // xhr-preview-items-snippet
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    // kita akan mengeluarkan seluruh isi dalam object video
    return (
        <li onClick = { ()=>onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{videoTitle}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;