export const SEARCH_INPUT_CHANGED = "The search input was changed";
export const handleSearchChanged = ()=> ({type: SEARCH_INPUT_CHANGED})
export default function updateNames(term) {
    return {
        type: SEARCH_INPUT_CHANGED,
        term: term
    }
}
