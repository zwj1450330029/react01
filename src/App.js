import React, { Component } from 'react'
import './App.css';

import List from './components/List'
import Header from './components/Header'


export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: '11111',
        done: true
      },
      {
        id: 2,
        name: '2222',
        done: true
      },
      {
        id: 3,
        name: '3333',
        done: false
      },
      {
        id: 4,
        name: '4444',
        done: true
      }
    ]
  }
  addItem = (obj) => {
    console.log('=====addItem')
    let { todos } = this.state;
    todos.unshift(obj);
    this.setState({ 'todos': todos })
  }
  changeDone = (id, done) => {
    let { todos } = this.state;
    let obj = todos.find(item => item.id == id)
    if (obj) {
      obj.done = done;
    }
    console.log(todos)
    this.setState({ todos: todos })

  }
  deleteItem = (id) => {
    let { todos } = this.state;
    let newArr = todos.filter(item =>
      item.id != id
    )
    this.setState({ todos: newArr })

  }
  render() {

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header a={1} addItem={this.addItem}></Header>
          <List todos={this.state.todos} changeDone={this.changeDone} deleteItem={this.deleteItem}></List>
        </div>
      </div>
    );
  }

}