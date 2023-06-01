import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  render() {
    let { name,done } = this.props
    console.log(name)
    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={done}></input>
          <span>{name}</span>
        </label>
        <button className="btn">删除</button>
      </li>
    )
  }
}