import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "contants/action-type";
import { fetchProducts } from "./product/productSaga";
export default function* rootSaga() {
    //bắt được action sau khi user dispatch và lắng nghe và gọi hàm xử lí tương ứng
    yield takeLatest(actionTypes.FETCH_PRODUCTS, fetchProducts)
}
