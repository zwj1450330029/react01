import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = {
    mouseOver: false

  }
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouseOver: flag })
    }

  }
  handleChange = (id) => {
    return (event) => {
      let checked = event.target.checked
      console.log(id, checked);
      this.props.changeDone(id, checked)

    }
  }
  handleClick = (id) => {
    if (window.confirm('确认删除吗?')) {
      this.props.deleteItem(id)

    }

  }
  render() {
    let { id, name, done } = this.props
    let { mouseOver } = this.state;
    return (
      <li style={{ background: mouseOver ? '#ddd' : '#fff' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleChange(id)}></input>
          <span>{name}</span>
        </label>
        <button onClick={() => { this.handleClick(id) }} className="btn" style={{ display: mouseOver ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}