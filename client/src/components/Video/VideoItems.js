import React, { Component } from 'react'
import { getVideosQuery } from "../../query";
import { compose, graphql } from 'react-apollo';
//import Plyr from 'react-plyr';

class VideoItems extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos : ''
        }
    }

    renderVideos = ({getVideosQuery: data}) => {
        if (data.loading) {
            return(
               <div className="item col-md-12 col-sm-12 col-lg-4">
                        <div className="my-item" style={{backgroundImage: `url('images/img.png')`}}>
                            <div className="play-background">
                                <img src="images/play.png" alt="play-icon"/>
                            </div>
                        </div>
                        <ul className="list-inline fnt-sm mb-0">
                            <li className="list-inline-item">
                                <i className="fas fa-users txt-grey"></i> 207 Views</li>
                            <li className="list-inline-item float-right">
                                <i className="far fa-clock"></i> 1h 15m</li>
                        </ul>
                        <p className="video-title">loading</p>
                </div>
            )
        }else{
            if (data.videos) {
                return data.videos.map(video => {
                    return (
                        <div key={video.id} className="item col-md-12 col-sm-12 col-lg-4">
                                <div className="my-item">
                                   
                                <p className="video-title">{video.name}</p>
                                </div>
                        </div>
                    )
                })
            }else{
                    return(
                        <h1>Nothing Show</h1>
                    )
            }   
        }
    }


  render() {
    return (
        <div className="main">
        <div className="my-videos">
            <div className="container">
                <div className="row">
                {this.renderVideos(this.props)}
                </div>
            </div>
        </div>
        </div>
    )
  }
}


export default compose(graphql(getVideosQuery, {
    name: 'getVideosQuery'
}))(VideoItems);