import React, { Component } from 'react'
import { addVideoMutation, getVideosQuery } from "../../query";
import {  compose, graphql } from 'react-apollo';
import swal from 'sweetalert';
import { Redirect } from "react-router-dom";
class AddVideos extends Component {

  constructor(props){
    super(props);

    this.state = { 
      name : '',
      link: '',
      category: '',
      description: '',
      redirect: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let videoLink = this.state.link.split('v=')[1];
   

    this.props.addVideoMutation({
      variables: {
        name : this.state.name,
        link: this.state.link,
        category: this.state.category,
        video_id: videoLink,
        description: this.state.description
      },
      refetchQueries: [{
        query: getVideosQuery
      }]
    }).then((data) => {
      const {addVideo} = data.data;
      swal({
          title: `${addVideo.name} has been saved!`,
          text: "Would want to Redirect?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willRedirect) => {
          if (willRedirect) {
            this.setState({
              redirect : true
            })
          } else {
             this.setState({
               name: '',
               link: '',
               category: '',
               description: ''
             })
          }
        });

    }).catch(error => {
        if(error){
          swal("Failed", "check all fields", "warning")
        }
      
    })
  }

  render() {
    if(this.state.redirect === true){
      return <Redirect to="/" />
    }

    return (
      <div className="main">
        <div className="my-videos">
          <div className="container">
                <h3>Add a New Video</h3>
              <div className="row video-dashboard">
                
                <div className="col-md-9" style={{margin : "0 auto"}}>
                  <form onSubmit={this.handleSubmit}>
                 
                    <label htmlFor="basic-url">Your Video Name</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Video Name" value={this.state.name} onChange={(e) => {this.setState({name : e.target.value})}}/>
                     
                    </div>

                    <label htmlFor="basic-url">Your Video Source</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="https://www.youtube.com/watch?v=9ywjjWAkeL0" value={this.state.link} onChange={(e) => {this.setState({link: e.target.value})}}/>
                    </div>

                     <label htmlFor="basic-url">Your Video Description</label>
                    <div className="input-group mb-3 ">
                      <textarea className="form-control" placeholder="A little bit about the video" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}></textarea>
                    </div>

                    <label htmlFor="basic-url">Tags. <small>seperate with a comma ',' eg: 'nodejs, awesome, always' no use of period '.' eg: 'nodejs' not 'node.js'</small></label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Tags" value={this.state.category} onChange={(e) => {this.setState({category: e.target.value})}}/>
                    </div>
                    <div className="input-group pull-right">
                      <button className="btn btn-large btn-success" type="submit"> Add </button>
                      
                    </div>
                   </form>
                </div>
            </div>
          
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(getVideosQuery, {
    name: "getVideosQuery"
  }),
  graphql(addVideoMutation, {
    name: "addVideoMutation"
  }),
)(AddVideos);


/* 
 export default graphql(getVideosQuery)(AddVideos) */