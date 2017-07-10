import {
    postCreatedSuccess,
    postCreatedFailure
} from "./post.actions"

export const  createPost = (postData,jwt_token) => {
    console.log("postdata-----",postData);
    return (dispatch) => {
        fetch("http://localhost:3000/api/post/create",{
            method:'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization':jwt_token,
            },
            body:JSON.stringify(postData)
        })
            .then(response=>response.json())
            .then((data)=>{
               dispatch(postCreatedSuccess(data.posts))
            })
            .catch((error)=>{
             dispatch(postCreatedFailure(error))
            })
    }
};