/**
 * Created by galushkasergiy on 26.09.16.
 */
let data = [{icon: 'fa fa-briefcase', maxValue: 4609, title: 'Works', currentValue: 0 }, {icon: 'fa fa-user', maxValue: 3470, title: 'Customers', currentValue: 0 }, {icon: 'fa fa-shopping-cart', maxValue: 2908, title: 'Purchase', currentValue: 0 }, {icon: 'fa fa-map-marker', maxValue: 1908, title: 'Office', currentValue: 0 }];
const achievementsReducer = (state={data}, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENT_VALUE':
            let newState = state;
            for (var i=0; i<newState.data.length; i++) {
                newState.data[i].currentValue = action.payload[i];
            }
            return newState;
        default:
            return state;
            break;
    }

};

module.exports = achievementsReducer;