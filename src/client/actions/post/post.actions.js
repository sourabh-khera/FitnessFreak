/**
 * Created by sourabh on 7/7/17.
 */
import {
    POST_CREATED_SUCCESS,
    POST_CREATED_FAILURE
} from "../../constants"

export const postCreatedSuccess = (post) => {
  return {type:POST_CREATED_SUCCESS,post}
};

export const postCreatedFailure = (error) => {
  return {type:POST_CREATED_FAILURE,error}
};