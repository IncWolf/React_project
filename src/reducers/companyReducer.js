/**
 * Created by galushkasergiy on 24.09.16.
 */
const companyReducer = (state={activeCompanyTab: 2}, action) => {
    switch (action.type) {
        case 'CHANGE_COMPANY_TAB':
            var newState = {...state, activeCompanyTab: action.payload};
            return newState;
        default:
            return state;
            break;
    }

};

module.exports = companyReducer;