import productsApi from "api/productsApi";
import { actionTypes } from "contants/action-type"
export const fetchProducts = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
    }

}
export const listProducts = (payload) => {
    return {
        type: actionTypes.LIST_PRODUCTS,
        payload,
    }

}
export const selectProduct = (id) => async (dispatch) => {
    const response = await productsApi.getId(id);
    dispatch({
        type: actionTypes.SELECT_PRODUCT,
        payload: response
    })
}
export const removeSelectProduct = () => async (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_SELECT_PRODUCT,
    })

}