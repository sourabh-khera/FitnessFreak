import isEmpty from 'lodash/isEmpty'

export const required = (value) => {
    if(isEmpty(value))
        return 'This field cannot be empty'
};

export const email = (value) => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        return 'Please enter a valid email'
};
export const noSpace = (value) => {
   if(/\s+/.test(value)){
       return 'Spaces are not allowed in this field'
   }
};