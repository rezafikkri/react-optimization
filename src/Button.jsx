import { PureComponent } from 'react';

export default class Button extends PureComponent {
  render() {
    console.log(`Button clicked ${this.props.children}`);
    return <button onClick={this.props.handleClick}>{this.props.children}</button>;
  }
}
