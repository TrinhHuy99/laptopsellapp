import Banner from "components/Banner";
import React from "react";
import '../Home/index.module.scss';
import Products from '../Products/index';
function Home() {
    return (
        <div className="body">
            <Banner />
            <Products />
        </div>
    );
}
export default React.memo(Home);