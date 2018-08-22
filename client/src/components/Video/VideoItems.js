import React, { Component } from 'react'
import { getVideosQuery } from "../../query";
import { compose, graphql } from 'react-apollo';
import {Link}  from "react-router-dom";


class VideoItems extends Component {

    constructor(props){
        super(props);

        this.state = {
            video : '',
            open : false
        }
    }

    onOpenModal = () => {
        this.setState({
            open : true
        })
    }

    onCloseModal = () => {
        this.setState({
            open : false,
            video: ''
        }) 
    }

    loadVideo = (video) => {
        this.setState({
            video : video
        })

        console.log(video)
    }



    renderVideos = ({getVideosQuery: data}) => {
        if (data.loading) {
            return(
               <div className="item col-md-12 col-sm-12 col-lg-4">
                    <p className="video-title">loading</p>
                </div>
            )
        }else{
            if (data.videos) {
                return data.videos.map(video => {
                    return (
                        <div key={video.id} className="item col-md-6 col-sm-12 col-lg-3">
                            <div className="card-item">
                               <iframe 
                                className="iframe"
                                title = {video.name}
                                src = {`https://www.youtube.com/embed/${video.video_id}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`}
                                frameBorder = "0"
                                allow = "autoplay; encrypted-media"
                                allowFullScreen > </iframe>
                                <Link to={`/player/${video.video_id}`}>
                                    <div className="overflow">
                                        {video.name} 
                                    </div>
                                </Link>
                                </div>
                                <p className="video-title">{video.name}</p>
                                
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
        <div className="my-videos">
            <div className="container-fluid">
                <div className="row">
                    {this.renderVideos(this.props)}
                </div>
            </div>
        </div>
        
    )
  }
}


export default compose(graphql(getVideosQuery, {
    name: 'getVideosQuery'
}))(VideoItems);