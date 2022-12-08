// const FIREBASE_DOMAIN =
//     "https://firebasestorage.googleapis.com/v0/b/react-cytaty.appspot.com/o";
//
// const FIREBASE_TOKEN = "?alt=media&token=552a6060-657a-4bbb-aefd-11806d5af29c";

let quotesJson = require('../quotes.json');
let commentsQuotesJson = require('../commentsQuotes.json');

export function getAllQuotes() {
    return quotesJson;
}

export function getSingleQuote(quoteId) {
    return quotesJson.find(element => element.id === parseInt(quoteId));
}

export function addQuote(quoteData) {
    const quoteAlreadyExist = quotesJson.find(quote => quote.author === quoteData.author && quote.text === quoteData.text);
    if (!quoteAlreadyExist) {
        const allIds = quotesJson.map(comment => comment.id);
        const maxId = Math.max(...allIds);
        quotesJson.push({
            id: maxId + 1,
            author: quoteData.author,
            text: quoteData.text
        });
        return {status: 'OK'};
    } else {
        window.alert("Taki cytat już istnieje!");
        return {status: 'ERROR'};
    }
}

export function addComment(requestData) {
    const commentAlreadyExist = commentsQuotesJson.find(commentQuote => commentQuote.quoteId === parseInt(requestData.quoteId) && commentQuote.author === requestData.author && commentQuote.text === requestData.text);
    if (!commentAlreadyExist) {
        const allIds = commentsQuotesJson.map(comment => comment.id);
        const maxId = Math.max(...allIds);
        commentsQuotesJson.push({
            id: maxId + 1,
            quoteId: parseInt(requestData.quoteId),
            author: requestData.author,
            text: requestData.text,
            date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        });
        return {status: 'OK'};
    } else {
        window.alert("Komentarz juz istnieje!");
        return {status: 'ERROR'};
    }
}

export function getAllComments(quoteId) {
    let commentsFound = [];
    commentsQuotesJson.forEach(comment => {
        if (comment.quoteId === parseInt(quoteId)) {
            commentsFound.push(comment);
        }
    });
    return commentsFound;
}
