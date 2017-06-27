import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import * as firebase from 'firebase'
import { config } from './config/firebase'
import todo_mobile from './routes'

firebase.initializeApp(config)

AppRegistry.registerComponent('todo_mobile', () => todo_mobile)
