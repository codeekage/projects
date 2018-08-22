import React, { Component } from 'react'
import Plyr from 'react-plyr'

export default class VideoPlayer extends Component {
  render() {
    return (
      <div className="video-player">
        <div className="video-wrapper">
            <Plyr className="player" type = "youtube" videoId = {this.props.match.params.id} />
        </div>
        
        <div className="all-items">
           <div className="recommendations">
                <div className="container">
                    <h2 className="text-center">Title</h2>
                    <div className="row justify-content-center">
                        <div className="col-6 play-item">
                            <p className="text-justify">
                                he child combinator( > ) is placed between two CSS selectors.It matches only those elements matched by the second selector that are the children of elements matched by the first.Elements matched by the second selector must be the immediate children of the elements matched by the first selector.
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        </div>

        <div className="skills">
            <div className="container">
                <h4 className="txt-gray">Video Tags</h4>
                <ul className="list-inline skill-list">
                    <li className="list-inline-item">
                        Leadership</li>
                   
                </ul>
            </div>
        </div>
    </div>
    )
}
}

/*    <Plyr type = "youtube"
   videoId = {this.props.match.params.id} /> */