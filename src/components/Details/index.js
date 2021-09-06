import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './index.scss';
import { currencyFormatVN } from 'utils/format';
import addToCart from 'actions/cart';
import { useEffect } from 'react';
import { selectProduct, removeSelectProduct } from 'actions/product';
import { Grid, Container } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Details() {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        if (id && id !== "") dispatch(selectProduct(id));
        return () => {
            dispatch(removeSelectProduct());
        };
    }, [id]);
    let data = useSelector(state => state.product);
    console.log(data);

    return (
        <div className="details">
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item sm={5} sx={12}>
                        <div className="details__img">
                            <Slider {...setting}>
                                <img src={data.anhSP} alt="product" />
                                <img src={data.anhSP} alt="product" />
                                <img src={data.anhSP} alt="product" />
                            </Slider>

                        </div>
                    </Grid>
                    <Grid item sm={7} sx={12}>
                        <div className="details__info">
                            <h4 className="details__info-title">{data.tenSP}</h4>
                            <p className="details__info-des">Thông tin sản phẩm:</p>
                            <span >{data.moTa}</span>
                            <p className="details__info-price">
                                <span>{currencyFormatVN(data.gia)}</span>
                            </p>
                            <div className="details__btn">
                                <button onClick={() => history.goBack()}>Tiếp tục mua sắm</button>
                                <button className="details__btn-add" onClick={() => dispatch(addToCart(data))}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <div className="details__comment">
                    <span style={{ fontSize: "20px", marginBottom: "10px", fontWeight: "600" }}>Bình luận về {data.tenSP}</span>
                    <textarea type="text" placeholder="Nhập vào bình luận" style={{ height: "50px", outline: "none" }}></textarea>
                    <button className="details__btn-send" >Gửi bình luận</button>
                </div>
                <div className="details__product-relate">

                    <Container maxWidth="lg" className="products__list">
                        <div className="details__products-title">SẢN PHẨM LIÊN QUAN</div>
                        <Grid container spacing={3}>
                        </Grid>
                    </Container>
                </div>
            </Container>

        </div>
    );
}
export default Details;