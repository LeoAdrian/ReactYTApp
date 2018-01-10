import React from 'react';

const VideoDetail = ({selectedVideo}) => {
  if(!selectedVideo){
    return <div>Loading</div>
  }

  const URL = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  const hideContent = function() {
    const description = document.getElementById('video-description');
    const see_more = document.getElementById('see-more');
    description.classList.toggle('hide-descr');
    if(description.className){
      see_more.innerHTML = 'See more';
    } else {
      see_more.innerHTML = 'See less';
    }
  }

  return (
    <div className='video-detail col-md-8'>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe  className="embed-responsive-item"  src={URL} allowFullScreen='true'/>
      </div>
      <div className="details">
        <div id = 'video-title'>{selectedVideo.snippet.title}</div>
        <div id = 'video-description' className = 'hide-descr'>{selectedVideo.snippet.description}</div>
        <div id='see-more' onClick = {hideContent}>See more</div>
      </div>
    </div>
  )
}

export default VideoDetail;
