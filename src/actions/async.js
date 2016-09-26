/**
 * Created by galushkasergiy on 24.09.16.
 */
// начало загрузки
export const requestNews = (state) => {
    return {
        type: 'FETCH_NEWS_START',
        payload: 'loading...'
    }
};

// обработка ошибки при загрузке данных
export const fetchError = (state) => {
    return {
        type: 'FETCH_NEWS_ERROR',
        payload: 'error'
    }
};

//передача данных при успешной их загрузке
export const receiveNews = (news) => {
    return {
        type: 'RECEIVE_NEWS',
        payload: news
    }
};

export function fetchNews() {
    return function(dispatch) {
        dispatch(requestNews());

        // создание promise
        return fetch('src/json/data.json')
            .then(response => response.json())
            .then(json =>
                dispatch(receiveNews(json))
            )
    }
}