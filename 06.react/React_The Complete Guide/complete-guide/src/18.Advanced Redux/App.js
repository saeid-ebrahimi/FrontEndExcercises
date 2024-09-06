import React, {useEffect, Fragment, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {fetchCartData, sendCartData} from "./store/cart-actions";

function App() {
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification)
    const [isInitial, setIsInitial] = useState(true)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCartData(cart))
    }, [])
    useEffect(()=> {
        if (isInitial){
            setIsInitial(false)
            return;
        }
        if (cart.changed){
            dispatch(sendCartData(cart))
        }

    }, [cart, dispatch])
    return (
        <Fragment>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
            <Layout>
                {showCart && <Cart />}
                <Products/>
            </Layout>
        </Fragment>
    )
}

export default App;
