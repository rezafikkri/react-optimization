import { Component } from 'react';

export default class Count extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.count !== nextProps.count) {
      return true;
    }
    return false;
  }

  render() {
    console.log("Count rendering", this.props.count);
    return <p>{this.props.text} is {this.props.count}</p>;
  }
}
