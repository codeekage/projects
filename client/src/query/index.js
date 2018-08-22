import { gql } from "apollo-boost";


const getVideosQuery = gql`
    {
        videos{
            name
            link
            description
            category
            id
            video_id
        }
    }
`

const getVideoByIdQuery = gql`
    query($video_id: String){
        videoById(video_id : $video_id){
            name
            description
            category
        }
    }


`

const addVideoMutation = gql`
    mutation($name: String!, $link: String!, $category: String!, $description: String!, $video_id : String! ){
        addVideo(name:$name, link:$link, category:$category, description:$description, video_id : $video_id){
            name
            link
            category
            description
            id
            video_id
        }
    }
`

export {addVideoMutation, getVideosQuery, getVideoByIdQuery}