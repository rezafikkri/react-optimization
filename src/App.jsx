import React, { Component } from 'react';
import Button from './Button';
import Title from './Title';
import Count from './Count';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 21,
      salary: 25000,
    };

    this.incrementAge = this.incrementAge.bind(this);
    this.incrementSalary = this.incrementSalary.bind(this);
  }

  incrementAge() {
    this.setState((state) => ({
      age: state.age + 1,
    }));
  }

  incrementSalary() {
    this.setState((state) => ({
      salary: state.salary + 1000,
    }));
  }

  render() {
    return (
      <div>
        <Title/>
        <Count text="age" count={this.state.age} />
        <Button handleClick={this.incrementAge}>Increment my age</Button>
        <Count text="salary" count={this.state.salary} />
        <Button handleClick={this.incrementSalary}>Increment my salary</Button>
      </div>
    );
  } 
}
