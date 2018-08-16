import React, { Component } from 'react'
import VideoItems from '../Video/VideoItems';

export default class Home extends Component {
  render() {
    return (
        <div className="main">
            <div className="my-videos">
                <div className="container">
                    <VideoItems/>
                </div>
            </div>
        </div>
    )
  }
}
