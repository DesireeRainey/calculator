import React, { Component } from 'react';

class Calculator extends Component {
	constructor(props){
    super(props)
    this.state={
    	val1: 0,
    	val2: 0,
        total: 0
    }
    this.add = this.add.bind(this);
  	this.handleChange1 = this.handleChange1.bind(this);
  	this.handleChange2 = this.handleChange2.bind(this);
	}
	add(e){
		e.preventDefault(e);
		let num1 =parseInt(this.state.val1)
		let num2 =parseInt(this.state.val2)
		this.setState({total: (num1 + num2)})
	}
  	handleChange1(event){
  		this.setState({val1: event.target.value});
  	}
  	handleChange2(event){
  		this.setState({val2: event.target.value});
  	}

  	
	render() {
		return(
		<div className="container">
  			<h1>Add with React!</h1>
  		<form onSubmit={this.add}>
  		<div className="add">
    		<input  value={this.state.val1} onChange={this.handleChange1} type="text" />
    		<span>+</span>
    		<input value={this.state.val2} onChange={this.handleChange2} type="text" />
    		<span>=</span>
    		<h3>The total is: {this.state.total}</h3>
  		  <button onSubmit={this.state.add}></button>

      </div>
  		</form>
		</div>
		);
	}
}

export default Calculator;