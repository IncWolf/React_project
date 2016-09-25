/**
 * Created by Incy on 25.09.2016.
 */
/**
 * Created by galushkasergiy on 24.09.16.
 */
let data = ['{"id":1,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"ALL"}',
    '{"id":2,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"GRAPHIC"}',
    '{"id":3,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"LANDING"}',
    '{"id":4,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"WEB"}',
    '{"id":5,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"ALL"}',
    '{"id":6,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"WORDPRESS"}',
    '{"id":7,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"ALL"}',
    '{"id":8,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"GRAPHIC"}',
    '{"id":9,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"LANDING"}',
    '{"id":10,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"LANDING"}',
    '{"id":11,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"ALL"}',
    '{"id":12,"title":"CREATIVE DESIGN","src":"src/img/3.jpg","category":"GRAPHIC"}'];

let photos = [];
for( let i = 0; i < data.length; i++) {
    photos[i] = JSON.parse(data[i])
};
const portfolioReducer = (state={photos, activeFilterTab: 'ALL'}, action) => {
    switch (action.type) {
        case 'CHANGE_FILTER':
            var filtered_photos = [];
            for (var i=0; i<photos.length; i++ ) {
                if (photos[i].category == action.payload) {
                    filtered_photos.push(photos[i]);
                }
            }
            let newState = {...state, photos: filtered_photos, activeFilterTab: action.payload};
            return newState;
        case 'SHOW_MASK':
            if (action.payload) {
                newState = {...state, mask: action.payload};
            } else {
                newState = {...state, mask: false};
            }
            return newState;
        default:
            return state;
            break;
    }

};

module.exports = portfolioReducer;