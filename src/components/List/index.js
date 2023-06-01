
import Item from '../Item'
import React, { Component, useLayoutEffect } from "react";
export default class List extends Component {
  render() {
    let { todos,changeDone ,deleteItem} = this.props;
    console.log(todos)
    return (
      <ul>
        {
          todos.map(item => <Item key={item.id} name={item.name} done={item.done} id={item.id} changeDone={changeDone} deleteItem={deleteItem}></Item>)
        }
      </ul>
    )
  }
}