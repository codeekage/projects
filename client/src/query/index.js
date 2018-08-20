import { gql } from "apollo-boost";


const getVideosQuery = gql`
    {
        videos{
            name
            link
            description
            category
            id
        }
    }
`

const addVideoMutation = gql`
    mutation($name: String!, $link: String!, $category: String!, $description: String!, $status: Int!){
        addVideo(name:$name, link:$link, category:$category, description:$description, status: $status){
            name
            link
            category
            description
            id
            status
        }
    }
`

export {addVideoMutation, getVideosQuery}