import { combineReducers } from 'redux';
import undoable,{includeAction} from "redux-undo"
import counter from './conter';
import {INCREMENT_COUNTER, DECREMENT_COUNTER, UNDO_COUNTER, REDO_COUNTER}   from "../actions"

/**
 * 虽然本例中只有一个reducer，但还是使用了`combineReducers`来进行合并，便于后期的拓展。
 * 在进行合并后，计数器的数值将被转移到`state.counter`中。
 */

const rootReducer = combineReducers({
    counter: undoable(counter,{
        filter :includeAction([INCREMENT_COUNTER, DECREMENT_COUNTER]),
        limit:10,
        debug:true,
        undoType: UNDO_COUNTER,
        redoType: REDO_COUNTER
    })
});

export default rootReducer;