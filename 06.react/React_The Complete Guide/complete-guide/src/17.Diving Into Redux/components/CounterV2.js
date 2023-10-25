import {useSelector, useDispatch, connect} from "react-redux";
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter);
    const incrementHandler = () => {
        dispatch({type:"increment"})
    }
    const decrementHandler = () => {
        dispatch({type:"decrement"})
    }
    const increaseHandler = () => {
        dispatch({type: 'increase', amount:10})
    }
    const toggleCounterHandler = () => {
        dispatch({type:'toggle'})
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>

            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
            {show && <div className={classes.value}>{counter}</div>}
        </main>
    );
};

export default Counter;
