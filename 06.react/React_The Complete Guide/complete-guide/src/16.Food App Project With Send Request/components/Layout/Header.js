import React, {Fragment} from "react";
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = ({onShowCart}) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img  src={mealsImage} alt="Meals Image"/>
            </div>
        </Fragment>
    )
};
export default Header;
