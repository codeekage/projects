import React, { Component } from 'react'
import Plyr from 'react-plyr';
import { graphql } from 'react-apollo';
import { getVideoByIdQuery } from "../../query";



class VideoPlayer extends Component {

    renderVideoDetails = () => {
        const {videoById : video} = this.props.data;
        
        if(video){
            return(
               <div className="container">
                    <h2 className="text-center">{video[0].name}</h2>
                    <div className="row justify-content-center">
                        <div className="col-6 play-item">
                            <p className="text-justify">
                                {video[0].description}
                            </p>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>No Video to Show</div>
            )
        }

    }

    renderVideoTags =  () => {
        const {videoById : video} = this.props.data;

        if(video){
            let tags = video[0].category.split(',');
            return(
                <ul className="list-inline skill-list">
                    {
                        tags.map((items, index) => {
                            return(
                                <li key={index} className="list-inline-item">{items}</li>
                            )
                        })
                    }
                </ul>
            )
        }
    }

  render() {
    return (
      <div className="video-player">
        <div className="video-wrapper">
            <Plyr className="player" type = "youtube" videoId = {this.props.match.params.id} />
        </div>
        
        <div className="all-items">
           <div className="recommendations">
                {this.renderVideoDetails()}
           </div>
        </div>

        <div className="skills">
            <div className="container">
                <h4 className="txt-gray">Video Tags</h4>
                {this.renderVideoTags()}
            </div>
        </div>
    </div>
    )
}
}

export default graphql(getVideoByIdQuery, {
    options: (props) => {
        return {
            variables: {
                video_id: props.match.params.id
            }
        }
    }
})(VideoPlayer);