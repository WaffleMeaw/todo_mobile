import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './App'

export default class todo_mobile extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('todo_mobile', () => todo_mobile)
