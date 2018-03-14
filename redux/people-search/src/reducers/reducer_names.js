import {people} from '../App';
import {SEARCH_INPUT_CHANGED} from '../actions/main';
const initial_state = {
    names : people
}
console.log(people);
export default function(state=initial_state, action) {
    console.log(action, state);
    switch(action.type) {
        case SEARCH_INPUT_CHANGED:
            return Object.assign(
                {},
                state.names.filter(name => name.includes(action.term))
            )
        default:
            return state;
    }
}

;
