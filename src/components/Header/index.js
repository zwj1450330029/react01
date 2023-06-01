import './index.css'
import React, { Component } from "react"
export default class Header extends Component {
  keyup = (event) => {
    let { value } = event.target;
    if (event.keyCode == 13) {
      console.log(value, event.keyCode)
      let obj = {
        id: Date.now(),
        name: value,
        done: false
      }
      this.props.addItem(obj)

    }

  }
  render() {
    console.log(this.props.a)
    return (
      <div className="header-box">
        <input onKeyUp={this.keyup} placeholder="请输入"></input>
      </div>
    )
  }
}