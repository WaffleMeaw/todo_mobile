import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Home, About } from './scenes'

const todo_mobile = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  About: { screen: About }
})

AppRegistry.registerComponent('todo_mobile', () => todo_mobile)
