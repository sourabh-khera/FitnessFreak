import { SET_VALIDATION_STATE } from '../constants'

const initialState = {
    errors: {},
    pristine: {},
};

 const validationReducer = (state=initialState,action)=>{

     switch(action.type){
         case SET_VALIDATION_STATE:{
             const {field,type,value}=action.payload;
             const typeSlice=state[type];

             if(typeof value === null){
                 delete typeSlice[field]
             }else {
                 typeSlice[field] = value;
             }
             return Object.assign({},state,{[type]:typeSlice})

         }
         default:{
             return state
         }
     }

};

 export default validationReducer;