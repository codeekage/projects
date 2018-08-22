import React, { Component } from 'react'
import { getVideosQuery } from "../../query";
import { compose, graphql } from 'react-apollo';
import Modal from 'react-responsive-modal';
import {Link}  from "react-router-dom";
//import { Player } from "video-react";

//import "../../node_modules/video-react/dist/video-react.css";


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
                    let videoLink = video.link.split('embed/')[1]
                  //  console.log(videoLink)
                    return (
                        <div key={video.id} className="item col-md-6 col-sm-12 col-lg-3">
                            <div className="card-item">
                               <iframe 
                                className="iframe"
                                title = {video.name}
                                src = {`${video.link}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`}
                                frameBorder = "0"
                                allow = "autoplay; encrypted-media"
                                allowFullScreen > </iframe>
                                <Link to={`/player/${videoLink}`}>
                                    <div className="overflow">
                                        {video.name} 
                                    </div>
                                </Link>
                                </div>
                                <p className="video-title" onClick={(e) => {this.onOpenModal(); this.loadVideo(videoLink)}}>{video.name}</p>
                                
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
      const {open}  = this.state;
      const styles = {
          color: "black"
      }
    return (
        <div className="my-videos">
            <div className="container-fluid">
                <div className="row">
                {this.renderVideos(this.props)}
{/*                 <img  src="images/img.png" alt="image"/>
 */}                </div>
            </div>
       
          <Modal open= {open}
          onClose = {
              this.onCloseModal
          }
          center
          classNames = {
              {
                  transitionEnter: 'transition-enter',
                  transitionEnterActive: 'transition-enter-active',
                  transitionExit: 'transition-exit-active',
                  transitionExitActive: 'transition-exit-active',
              }
          }
          animationDuration = {
                  1000
              } styles={styles}>

            <p>{this.state.video}</p>
            </Modal>
        </div>
        
    )
  }
}


export default compose(graphql(getVideosQuery, {
    name: 'getVideosQuery'
}))(VideoItems);