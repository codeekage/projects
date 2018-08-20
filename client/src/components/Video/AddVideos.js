import React, { Component } from 'react'
import { addVideoMutation, getVideosQuery } from "../../query";
import {  compose, graphql } from 'react-apollo'
import swal from 'sweetalert'
class AddVideos extends Component {

  constructor(props){
    super(props);

    this.state = {
      name : '',
      link: '',
      category: '',
      description: '',
      status: 0,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    //let videoLink = this.state.link.split('v=')[1];

    this.props.addVideoMutation({
      variables: {
        name : this.state.name,
        link: this.state.link,
        category: this.state.category,
        description: this.state.description,
        status: 1
      },
      refetchQueries: [{
        query: getVideosQuery
      }]
    }).then((data) => {
      console.log({value : data.data.addVideo.status});
      const {addVideo} = data.data;
      if(addVideo.name !== "" && addVideo.link !== "" && addVideo.category !== "" && addVideo.description){
        swal("done")
      }else{
        swal("make sure all fields")
      }
    }).catch(error => {
      console.log(error);
    })

   
    
  }

  render() {
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

                    <label htmlFor="basic-url">Tags</label>
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