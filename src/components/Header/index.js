import './index.scss';
import logo from '../../assets/images/logolaptop.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DesktopAccessDisabledIcon from '@material-ui/icons/DesktopAccessDisabled';
function Header() {
    const style = {
        alignItems: 'center',
        color: 'white',
        fontSize: '26px',

    }
    const styleColor = {
        color: 'white',
    }
    const cart = useSelector(state => state.cart.cartItems);
    return (
        <div className="header">
            <Container fixed>
                <div className="header__nav">
                    <div className="header__home">
                        <NavLink to='/' exact >
                            <div className="header__logo">
                                <img src={logo} alt='Logo'></img>
                                <p>
                                    <span>L</span>
                                    aptop.vn
                                </p>
                            </div>
                        </NavLink>
                        <div className="header__search">
                            <input className="header__search-input" placeholder="Nhập từ khóa cần tìm"></input>
                            <button className="header__search-button">
                                <SearchIcon style={{ color: 'white' }}></SearchIcon>
                            </button>
                        </div>
                    </div>


                    <div className="header__feature">
                        <div className="header__account">
                            <AccountCircleOutlinedIcon style={{ margin: '0 2px', color: "white" }} />
                            <NavLink to="/dangnhap"><span className="header__account-login">Đăng nhập</span></NavLink>
                            <span style={{ margin: '0 4px', fontSize: '12px', color: "white" }}>|</span>
                            <NavLink to="/dangki"><span className="header__account-register">Đăng kí</span></NavLink>

                        </div>
                        <div className="header__cart">
                            <NavLink to='/giohang'>
                                <ShoppingCartIcon style={style}></ShoppingCartIcon>
                                <span className="header__cart-title">{cart.length}</span>
                            </NavLink>
                        </div>
                    </div>


                </div>

            </Container>
            <div className="header__menu">
                <ul className="header__menu-list">
                    <li className="header__menu-items">
                        <LaptopMacIcon style={styleColor}></LaptopMacIcon>
                        <NavLink to="/sanpham/laptop">LAPTOP</NavLink>
                        <ul className="header__menu-sub-list">
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/laptop/acer">Laptop ACER</NavLink>
                            </li>
                            <li className="header__menu-sub-items">

                                <NavLink to="/sanpham/laptop/dell">Laptop DELL</NavLink>
                            </li>
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/laptop/asus">Laptop ASUS</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="header__menu-items">
                        <DesktopMacIcon style={styleColor}></DesktopMacIcon>
                        <NavLink to="/sanpham/desktop">DESKTOP</NavLink>
                        <ul className="header__menu-sub-list">
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/desktop/may-tinh-sieu-nho">Máy tính siêu nhỏ NUC ACER</NavLink>
                            </li>
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/desktop/may-aio">Máy AIO</NavLink>
                            </li>
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/desktop/server">Server</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="header__menu-items">
                        <DesktopAccessDisabledIcon style={styleColor}></DesktopAccessDisabledIcon>
                        <NavLink to="/sanpham/linhkien">LINH KIỆN</NavLink>
                        <ul className="header__menu-sub-list">
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/linhkien/ram">RAM - Bộ nhớ RAM</NavLink>
                            </li>
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/linhkien/hdd">HDD - Ổ cứng</NavLink>
                            </li>
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/linhkien/mouse">Mouse - Chuột</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="header__menu-items">
                        <HeadsetMicIcon style={styleColor}></HeadsetMicIcon>
                        <NavLink to="/sanpham/phukien">PHỤ KIỆN</NavLink>
                        <ul className="header__menu-sub-list">
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/phukien/webcam">WebCam</NavLink>
                            </li>
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/phukien/card-mang">Card Mạng</NavLink>
                            </li>
                            <li className="header__menu-sub-items">
                                <NavLink to="/sanpham/phukien/sac-laptop">Sạc(Adapter) Laptop</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;