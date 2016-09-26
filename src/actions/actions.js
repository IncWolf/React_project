/**
 * Created by galushkasergiy on 24.09.16.
 */
export const changeCompanyTab = (id) => {
    return {
        type: 'CHANGE_COMPANY_TAB',
        payload: id
    }
};
export const changeFilter = (category) => {
    return {
        type: 'CHANGE_FILTER',
        payload: category
    }
};
export const showMask = (id) => {
    return {
        type: 'SHOW_MASK',
        payload: id
    }
};
export const changeNumberValue = (array) => {
    return {
        type: 'CHANGE_CURRENT_VALUE',
        payload: array
    }
};