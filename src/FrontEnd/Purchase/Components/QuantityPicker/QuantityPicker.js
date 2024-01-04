import React, { Component, useState } from 'react';
import './QuantityPicker.css'

export default class QuantityPicker extends Component {

  constructor(props) {

    super(props);
    this.state = { value: this.props.current, disableDec: true, disableInc: false }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.cart = this.props.cart;
    this.cartItemID = this.props.cartItem;
  }

  increment() {
    const plusState = this.state.value + 1;
    if (this.state.value < this.props.max) {
      this.setState({ value: plusState });
      this.setState({ disable: false });
    }
    if (this.state.value == (this.props.max - 1)) {
      this.setState({ disableInc: true });
    }
    if (this.state.value == this.props.min) {
      this.setState({ disableDec: false });
    }

    //Call the increase quantity func of the cart class
    this.cart.increaseQuantity(this.cartItemID);
  }

  decrement() {
    const minusState = this.state.value - 1;
    if (this.state.value > this.props.min) {
      this.setState({ value: minusState });
      if (this.state.value == this.props.min + 1) {
        this.setState({ disableDec: true });
      }
    } else {
      this.setState({ value: this.props.min });
    }
    if (this.state.value == this.props.max) {
      this.setState({ disableInc: false });
    }

    //Call the increase quantity func of the cart class
    this.cart.decreaseQuantity(this.cartItemID);
  }

  render() {
    const { disableDec, disableInc } = this.state;

    const DecrementBtn = () => {
      return (
        <button className={`${disableDec ? 'mod-disable ' : ''}quantity-modifier modifier-left`} onClick={this.decrement}>&ndash;</button>
      )
    }

    const QuantityDisplay = () => {
      return (
        <input className="quantity-display" type="text" value={this.props.current} readOnly />
      )
    }

    const IncrementBtn = () => {
      return (
        <button className={`${disableInc ? 'mod-disable ' : ''}quantity-modifier modifier-right`} onClick={this.increment}>&#xff0b;</button>
      )
    }

    return (
      <span className="quantity-picker">
        <DecrementBtn />
        <QuantityDisplay />
        <IncrementBtn/>
      </span>
    );
  }
}
