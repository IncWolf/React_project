/**
 * Created by IncWolf on 26.09.2016.
 */
const newsReducer = (state=[], action) => {
    switch (action.type) {
        // обработчики асинхронной загрузки данных
        case 'FETCH_NEWS_START': {
            return {...state, fetching: true, news: []}
        }
        case 'FETCH_NEWS_ERROR': {
            return {...state, fetching: false, error: action.payloads, news: []}
        }
        case 'RECEIVE_NEWS': {
            var list = [];
            for (var i=0; i<8;i++) {
                list.push(action.payload[i]);
            }
            return {
                ...state,
                fetching: false,
                fetched: true,
                news: action.payload,
                list: list
            }
        }
        default: {
            return state;
        }

    }

};

module.exports = newsReducer;