import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  formateCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  handleIncrement = (productId) => {
    console.log('Item CLicked');
    this.setState({ count: this.state.count + 1 });
    console.log(productId);
  };

  handleDecrement = () => {
    console.log('Item CLicked');
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className='container justify-content-center d-flex align-items-center '>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>

        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          style={this.style}
          className='btn btn-secondary btn-sm m-2'
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          style={this.style}
          className='btn btn-secondary btn-sm'
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
