
import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App(){
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
      setCartIsShown(true)
  }
  const hiddenCartHandler = () => {
      setCartIsShown(false)
  }
  return(
      <CartProvider>
          {cartIsShown && <Cart onClose={hiddenCartHandler}/>}
          <Header onShowCart={showCartHandler}/>
          <main>
              <Meals/>
          </main>
      </CartProvider>


  )
}
export default App;