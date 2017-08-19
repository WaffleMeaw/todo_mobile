import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import { Button, Form, Item, Label, Input } from 'native-base'
import * as firebase from 'firebase'

import signIn from '../features/signIn'

class Signin extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSignIn() {
    const { email, password } = this.state
    signIn(email, password)
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
        <View>
          <Text style={styles.title}>To Do</Text>

          <Form style={{ marginTop: 30, marginBottom: 50, marginRight: 15 }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input keyboardType={'email-address'} value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
            </Item>
          </Form>

          <Button block style={{ marginHorizontal: 15 }} onPress={() => this.handleSignIn()}>
            <Text pointerEvents="none" style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Sign In</Text>
          </Button>

          <TouchableOpacity style={{ marginTop: 50, alignSelf: 'center' }} onPress={() => navigate('Signup')}>
            <Text style={{ fontSize: 18 }}>Register</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    textAlign: 'center',
  },
  textfield: {
    marginBottom: 30,
    marginLeft: 25,
    marginRight: 25,
  }
})

export default Signin
