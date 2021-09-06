import Register from 'components/Register';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from '../components/Cart/index';
import Details from '../components/Details/index';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import Home from '../components/Home/index';
import Login from '../components/Login/index';
import Products from '../components/Products/index';
import './index.scss';
function HomePage() {
    return (
        <>
            <Router>
                <Header />
                <div className="homepage">
                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>
                        <Route path='/dangnhap' component={Login}></Route>
                        <Route path='/dangki' component={Register}></Route>
                        <Route path='/giohang' component={Cart}></Route>
                        <Route path='/sanpham'>

                            <Products />
                        </Route >
                        <Route path='/details/:id' component={Details} />
                    </Switch>
                </div>
            </Router>
            <Footer />
        </>

    );
}
export default HomePage;