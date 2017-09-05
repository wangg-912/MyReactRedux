import React,{PropTypes} from "react"
function Counter({counter ,increment,decrement,incrementIdOdd,incrementAsync}){
    return(
        <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIdOdd}>Increment if odd</button>
        {' '}
        <button onClick={incrementAsync}>Increment async</button>
      </p>  
    )
}

Counter.propsTypes={
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIdOdd: PropTypes.func.isRequired,
    decreincrementAsyncment: PropTypes.func.isRequired
}
export default Counter;