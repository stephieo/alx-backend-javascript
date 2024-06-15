#!/usr/bin/node
/* eslint-disable */
import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('not a currency');
    } else if (typeof amount !== 'number') {
      throw new TypeError('not a number')
    }
    this._currency = currency;
    this._amount = amount;
  }
  
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('not a Currency')
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('not a currency');
    }
    this._currency = newCurrency;
  }
  
  displayFullPrice() {
    // const currencyDisplay = ;
    return `${this._amount} ${this._currency.displayFullCurrency()}`
  }
}
