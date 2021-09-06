import { Container, Grid } from '@material-ui/core';
import { fetchProducts } from 'actions/product';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Product from '../Product/index';
import '../Products/index.scss';
function Products(props) {
    const data = useSelector(state => state.allProduct.products);
    console.log(data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return (
        <div className="products">
            <Container maxWidth="lg" className="products__list">
                <div className="products__des">
                    <div className="products__title">SẢN PHẨM NỔI BẬT</div>
                    <Link to="/sanpham/sanphamnoibat"><button className="products__all-btn">Xem tất cả</button></Link>
                </div>
                <Grid container spacing={3}>
                    {data && data.map((product) =>
                        <Grid item sm={3} sx={12} key={product.idSP}>
                            <Product data={product} />
                        </Grid>
                    )}
                </Grid>
            </Container>
        </div>
    );
}
export default React.memo(Products);