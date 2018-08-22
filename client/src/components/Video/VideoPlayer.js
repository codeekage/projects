import React, { Component } from 'react'
import Plyr from 'react-plyr'

export default class VideoPlayer extends Component {
  render() {
    return (
       <div className="my-videos">
            <div className="container">
                <div className="row">
                    <div className="item col-md-6 col-sm-12 col-lg-12">
                        <div className="my-item">
                            <Plyr type="youtube" videoId={this.props.match.params.id} />
                        </div>
                </div>
                </div>
            </div>
        </div>
     
     
    )
}
}

{/*    <Plyr type = "youtube"
   videoId = {this.props.match.params.id} /> */}