import API from "../../api"

export const fetchProducts = () => async (dispatch) =>{
    try {
        const {data} = await API.get("/products")
        dispatch({type: "FETCH_PRODUCTS", payload: data})

    } catch (error) {
        console.log(error)
    }
}

export const fetchProductDetails = (id) => async (dispatch) =>{
    try {
        const {data} = await API.get(`/products/${id}`)
        dispatch({type: "FETCH_PRODUCT_DETAILS", payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const removeSelectedProduct = () => {
    return {
      type: "REMOVE_SELECTED_PRODUCT"
    };
  };

