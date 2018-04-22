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

export const postQuote = quote => dispatch => {
    let quoteData = {
        quote : quote
    }
    let parsedJSON = JSON.stringify(quoteData);
    fetch('/quoteSubmit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(quoteData)
  })
    .then(res => res.json())
    .then(quote =>
      dispatch({
        type: POST_QUOTES,
        payload: quote
      })
    );
}