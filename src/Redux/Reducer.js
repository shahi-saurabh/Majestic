import {GLOABLEDATA} from "./Action"

const initialState={
gloableDATA:""
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOABLEDATA:
        return {
            ...state,
gloableDATA: action.payload,
        }
        default:
            return state
    }

}
export default Reducer