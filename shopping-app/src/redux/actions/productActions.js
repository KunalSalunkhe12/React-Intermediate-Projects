import API from "../../api"

export const fetchProducts = () => async (dispatch) =>{
    try {
        const {data} = await API.get("/products?offset=0&limit=10")
        dispatch({type: "FETCH_PRODUCTS", payload: data})

    } catch (error) {
        console.log(error)
    }
}

export const fetchProductDetails = (id) => async (dispatch) =>{
    try {
        const {data} = await API.get(`/products/${id}`)
        console.log(data)
        dispatch({type: "FETCH_PRODUCT_DETAILS", payload: data})
    } catch (error) {
        console.log(error)
    }
}