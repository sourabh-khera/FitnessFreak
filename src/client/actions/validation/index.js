import { SET_VALIDATION_STATE } from '../../constants'

export function setValidationState (type, field, value) {
    return {
        type: SET_VALIDATION_STATE,
        payload: {
            field,
            type,
            value,
        }
    }
}