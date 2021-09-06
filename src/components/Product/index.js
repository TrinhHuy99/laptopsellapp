import React from 'react';
import { Link } from 'react-router-dom';
import { currencyFormatVN } from 'utils/format';
import '../Product/index.scss';
function Product(props) {
    const { data } = props;
    const { idSP, anhSP, tenSP, gia, loaiSP, kieuSP } = data;
    const { tenKieu } = kieuSP;
    const { tenLoai } = loaiSP;
    return (
        <div className="product">
            <Link to={`/details/${idSP}`}><img className="product__img" src={anhSP} alt="img1"></img></Link>
            <Link to={`/details/${idSP}`}><h3 className="product__title">{tenSP} - {tenLoai} {tenKieu}</h3></Link>
            <span className="product__descr">(Ryzen 3-3250U/4Gb/256GB SSD/14FHD/ AMD Radeon/Win10/Silver)</span>
            <span className="product__price">{currencyFormatVN(gia)}</span>
            <div className="product__sales">
                <span style={{ padding: "4px", display: "block" }} > Khuyến mãi</span>
            </div>
        </div >
    );

}
export default React.memo(Product);
