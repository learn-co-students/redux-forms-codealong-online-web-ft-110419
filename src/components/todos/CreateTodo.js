import React, { Component } from 'react'

import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
   
  // handleChange(event) {
  //   this.setState({
  //     text: event.target.value
  //   });
  // };

  handleChange = event => {
    this.setState({
        text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
  
  // render() {
  //   return(
  //     <div>
  //       Create Todo Component
  //     </div>
  //   )
  // }

  render(){
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
        {/* <form> */}
          <p>
            <label>add todo</label>
            {/* <input type="text" onChange={(event) => this.handleChange(event)}/> */}
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        {/* </form> */}
        </form>
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => {
  // return {
  //   addTodo: () => dispatch(<some action>)
  // }

  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };

}


// export default CreateTodo;

export default connect(null, mapDispatchToProps)(CreateTodo);


