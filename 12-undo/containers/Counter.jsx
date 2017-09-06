import React,{PropTypes} from "react"
import { connect} from "react-redux"
import * as ActionCreators from "../actions"

function Counter ({counter,increment,decrement,undo,redo}){
    return(
        <p>
            Clicked:{counter} times
            {''}
            <button onClick={increment}>+</button>
            {""}
            <button onClick={decrement}>-</button>
            {""}
            <button onClick={undo}>incrementIdOdd</button>
            {""}
            <button onClick={redo}>incrementAsync</button>
        </p>
    )
}

Counter.propTypes = {
    counter:PropTypes.number.isRequired,
    increment : PropTypes.func.isRequired,
    decrement : PropTypes.func.isRequired,
    undo : PropTypes.func.isRequired,
    redo : PropTypes.func.isRequired
}

 export default connect(
     state =>({counter:state.counter.present }),
     ActionCreators
 )(Counter)