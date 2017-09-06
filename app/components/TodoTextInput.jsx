import React,{Component,PropTypes} from "react"
import classnames from "classnames"

class TodoTextInput extends Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            text:this.props.text || ""
        }
    }
    handleBlur(e){
        if(!this.props.newTodo){
            this.props.onSave({
                text: e.target.value
            })
        }
    }
    handleChange(e){
        this.setState({
            text:e.target.value
        })
    }
    handleKeySubmit(e){
        const text = e.target.value.trim();
        if(e.which === 13){
            this.props.onSave(text);
            if(this.props.newTodo){
                this.setState({text:""})
            }
        }
    }
    render(){
        return(
            <input 
            className={classnames({edit:this.props.editing,"new-todo":this.props.newTodo})}
            type="text"
            placeholder ={this.props.placeholder}
            autoFocus ="true"
            value = {this.state.text}
            onBlur = {this.handleBlur}
            onChange = {this.handleChange}
            onKeyDown = {this.handleKeySubmit}
             />
        )
    }
}

TodoTextInput.propTypes = {
    onSave:PropTypes.func.isRequired,
    text:PropTypes.string,
    placeholder:PropTypes.string,
    editing:PropTypes.bool,
    newTodo:PropTypes.bool
}

export default TodoTextInput