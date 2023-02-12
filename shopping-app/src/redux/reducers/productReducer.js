const productsState = {
    products: []
}

export const fetchProductsReducer = (state = productsState, { type, payload }) => {
    switch (type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: payload
            }
        default:
            return state
    }
}

export const fetchDetailsReducer = (state = { data: null }, { type, payload }) => {
    switch (type) {
        case "FETCH_PRODUCT_DETAILS":
            return {
                ...state, data: payload
            };
        case "REMOVE_SELECTED_PRODUCT":
            return {};
        default:
            return state;
    }
}

