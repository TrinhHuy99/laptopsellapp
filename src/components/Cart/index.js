import { DeleteFilled } from '@ant-design/icons';
import { Container, Grid } from '@material-ui/core';
import { decreaseItem, increaseItem, removeAllItem, removeItem } from 'actions/cart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { currencyFormatVN } from 'utils/format';
import '../Cart/index.scss';
function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cartItems);
    return (
        <div className="cart">
            <Container fixed>
                {cart.length === 0 ? (<div className="cart__info">
                    <div className="cart__header">Không có sản phẩm nào trong giỏ hàng</div>
                    <Link to="/sanpham"> <button >Tiếp tục mua sắm</button></Link></div>) :
                    (<div className="cart__list">
                        <div className="cart__list-des">
                            <div className="cart__list-title">GIỎ HÀNG CỦA BẠN</div>
                            <button className="cart__list-remove-all" onClick={() => dispatch(removeAllItem())}>Xóa tất cả</button>
                        </div>
                        <div className="cart__center">
                            <Grid container spacing={3}>
                                <Grid item sm={8} sx={12}>
                                    {cart.map(item => (
                                        <div key={item.idSP} style={{ display: "flex", marginBottom: "10px", paddingBottom: "4px", borderBottom: "1px solid gray", alignItems: "center" }} className="cart_items">
                                            <div className="cart__items-img">
                                                <img src={item.anhSP} alt=""></img>
                                            </div>
                                            <div className="cart__items-title">{item.tenSP}</div>
                                            <div className="cart__items-price">
                                                {currencyFormatVN(item.gia)}
                                            </div>
                                            <div className="cart__items-qt">
                                                <button className="cart__items-qt-dec" onClick={() => dispatch(decreaseItem(item))}>-</button>
                                                <span className="cart__items-qt-value">{item.soluong}</span>
                                                <button className="cart__items-qt-inc" onClick={() => dispatch(increaseItem(item))}>+</button>
                                            </div>

                                            <div className="cart__items-remove">
                                                <DeleteFilled onClick={() => dispatch(removeItem(item))} />
                                            </div>

                                        </div>
                                    ))
                                    }
                                </Grid>
                                <Grid item sm={4} sx={12}>
                                    <div className="cart__payment">
                                        <span className="cart__payment-title">Phiếu mua hàng</span>
                                        <div className="cart__payment-sales">
                                            <input type="text" placeholder="Nhập mã giảm giá" className="cart__payment-sales-input"></input>
                                            <button className="cart__payment-sales-btn">Áp dụng giảm giá</button>
                                        </div>
                                        <div className="cart__prices">
                                            <h3 className="cart__prices-title">Thông tin đơn hàng</h3>
                                            <ul className="cart__prices-items">
                                                <li className="cart__prices-item">
                                                    <span className="cart__prices-text">Tạm tính: </span>
                                                    <span className="cart__prices-value">{currencyFormatVN(
                                                        cart.reduce((acc, cur) =>
                                                            acc + cur.gia * cur.soluong, 0
                                                        )
                                                    )} </span>
                                                </li>
                                                <li className="cart__prices-item">
                                                    <span className="cart__prices-text">Giảm giá: </span>
                                                    <span className="cart__prices-value">{currencyFormatVN(0)} </span>
                                                </li>
                                            </ul>
                                            <div className="cart__prices-total">
                                                <div className="cart__prices-des">
                                                    <span className="cart__prices-text">Tổng cộng: </span>
                                                    <span className="cart__prices-value " style={{ color: 'red', fontSize: '18px' }}>{currencyFormatVN(
                                                        cart.reduce((acc, cur) =>
                                                            acc + cur.gia * cur.soluong, 0
                                                        )
                                                    )} </span>
                                                </div>
                                                <i>(Đã bao gồm VAT nếu có)</i>
                                            </div>
                                        </div>
                                        <button type="button" className="cart__prices-process" >Tiến hành đặt hàng</button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>)
                }
            </Container >

        </div >
    );
}
export default Cart;