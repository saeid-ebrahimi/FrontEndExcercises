import { createStore,} from 'redux';

const initialState = {counter:0, showCounter:true};
const counterReducer = (state = initialState , action)  => {
    if (action.type === 'increment'){
        // state.counter++; // it's wrong way , never mutate states in raw Redux
        return { counter: state.counter + 1 , showCounter: state.showCounter}; //In raw Redux always should update all states
    }else if(action.type === 'increase'){
        return {counter: state.counter + action.amount , showCounter: state.showCounter}
    }else if (action.type === 'decrement'){
        return { counter: state.counter - 1, showCounter: state.showCounter};
    }else if(action.type === 'toggle'){
        return { counter: state.counter, showCounter: ! state.showCounter}
    }
    return state
}
const store = createStore(counterReducer);

export default store;