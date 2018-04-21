import { POST_QUOTES, GET_QUOTES } from '../actions/actionType';

let defaultQuotes = {
    quotes: [],
    newQuote: {}
};

export default function (state = defaultQuotes, action) {
    switch (action.type) {
        case GET_QUOTES:
            return {
                ...state,
                quotes:action.payload
            };
            break;
        case POST_QUOTES:
            return {
                ...state,
                newQuote: action.payload
            };
            break;
        default:
            return state;
    }
    return state;
}
