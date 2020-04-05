import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
	state = {
		text: ""
	}

	handleChange = (event) => {
		this.setState({text: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.addTodo(this.state.text)
	}
  	render() {
    	return(
     		<div>
     			<form onSubmit={this.handleSubmit}>
     				<p>
     					<label>Add Todo</label>
        				<input type="text" onChange={this.handleChange} value = {this.state.text}></input>
        				<input type="submit"></input>
        			</p>
        		</form>
        		{this.state.text}
      		</div>
    	)
  	}
}

const mapDispatchToProps = (dispatch) => {
	return {addTodo: (todo) => dispatch({type: 'ADD_TODO', payload: todo})}
}

export default connect(null, mapDispatchToProps)(CreateTodo);
