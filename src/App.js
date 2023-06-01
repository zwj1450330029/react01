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
  addItem(obj) {
    let { todos } = this.state;
    let newArr = todos.unshift(obj);

    this.setState({ 'todos': newArr })

  }
  render() {

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header a={1} addItem={this.addItem}></Header>
          <List todos={this.state.todos}></List>
        </div>
      </div>
    );
  }

}