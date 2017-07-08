/**
 * Created by sourabh on 7/7/17.
 */
import {
    postCreatedSuccess,
    postCreatedFailure
} from "./post.actions"

export const  createPost = (postData) => {
    return (dispatch) => {
        fetch("http://localhost:3000/api/post/create",{
            method:'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(postData)
        })
            .then(response=>response.json())
            .then((data)=>{
               dispatch(postCreatedSuccess())
            })
            .catch((error)=>{
             dispatch(postCreatedFailure(error))
            })
    }
};