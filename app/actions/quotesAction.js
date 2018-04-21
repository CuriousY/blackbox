import { GET_QUOTES, POST_QUOTES } from './actionType'

let defaultQuotes = [];

export const getQuotes = () => dispatch => {
    fetch('/getQuotes')
        .then(res => res.json())
        .then(quotes =>
            dispatch({
                type: GET_QUOTES,
                payload: quotes
            })
        );
};

export const addItem = quote => dispatch => {
    dispatch({
        type: POST_QUOTES,
        payload: quote
    });
}