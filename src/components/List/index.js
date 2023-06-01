
import Item from '../Item'
import React, { Component, useLayoutEffect } from "react";
export default class List extends Component {
  render() {
    let { todos } = this.props;
    console.log(todos)
    return (
      <ul>
        {
          todos.map(item => <Item key={item.id} name={item.name} done={item.done}></Item>)
        }
      </ul>
    )
  }
}