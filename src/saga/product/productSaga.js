import { put } from 'redux-saga/effects';
import { productAction } from '../../actions/index';
import productsApi from '../../api/productsApi';
export function* fetchProducts() {
    try {
        const response = yield productsApi.getALl();
        //dispatch action success
        yield put(productAction.listProducts(response ? [...response] : []));
    } catch (err) {
        console.log(err);
    }
}