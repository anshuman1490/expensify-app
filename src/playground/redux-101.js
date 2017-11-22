import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) =>( {
    type: 'INCREMENT',
        incrementBy

});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
        decrementBy

});

const setCount = ({ count = 1 } = {}) =>( {
    type: 'SETCOUNT',
        count

});

const resetCount = () =>({
    type: 'RESET'

});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return { count: state.count - action.decrementBy };

        case 'RESET':
            return { count: 0 };
        case 'SETCOUNT':
            return {
                count: state.count + action.count
            };

        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



// store.dispatch({
//     type: 'INCREMENT'
// });

// //unsubscribe();    

// store.dispatch({
//     type: 'INCREMENT'
// });

// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });


store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(setCount({ count: 50 }));