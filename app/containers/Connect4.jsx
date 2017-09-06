import React,{PropTypes} from "react"
import {connect} from "react-redux"
import {increment,decrement,incrementIdOdd,incrementAsync} from "../actions"

function Counter({counter,dispatch}){
    return(
        <p>
            Clicked:{counter} times
            {''}
            <button onClick={()=>dispatch(increment())}>+</button>
            {""}
            <button onClick={()=>dispatch(decrement())}>-</button>
            {""}
            <button onClick={()=>dispatch(incrementIdOdd())}>incrementIdOdd</button>
            {""}
            <button onClick={()=>dispatch(incrementAsync())}>incrementAsync</button>
            {""}
        </p>
    )
}
Counter.propTypes = {
    counter:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired,
    incrementIdOdd:PropTypes.func.isRequired,
    incrementAsync:PropTypes.func.isRequired
}

export default connect(
    state => ({counter:state.counter})
)(Counter);