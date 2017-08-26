import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import { Button, Form, Item, Label, Input } from 'native-base'
import * as firebase from 'firebase'
import { NavigationActions } from 'react-navigation'

const actionToSignIn = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Signin' })
  ]
})

class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    errorCode: null,
    errorMessage: '',
    passwordError: '',
  }

  signup() {
    const { email, password, confirmPassword } = this.state

    if (password === confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
          // Store data into redux store maybe.
          console.log(res.uid)
          console.log(res.email)
          console.log(res.emailVerified)

          this.props.navigation.dispatch(actionToSignIn)
        })
        .catch((error) => {
          this.setState({ errorCode: error.code, errorMessage: error.message })
          // Display error message.
        })
    } else if (password !== confirmPassword) {
      this.setState({ passwordError: '' })
    }
  }

  render() {
    const { navigate, goBack } = this.props.navigation

    return (
      <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
        <View>
          <Text style={styles.title}>Sign up</Text>

          <Form style={{ marginTop: 30, marginBottom: 50, marginRight: 15 }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input keyboardType={'email-address'} value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
            </Item>
            <Item floatingLabel>
              <Label>Confirm Password</Label>
              <Input secureTextEntry value={this.state.confirmPassword} onChangeText={(text) => this.setState({ confirmPassword: text })} />
            </Item>
          </Form>

          <Button block style={{ marginHorizontal: 15 }} onPress={() => this.signup()}>
            <Text pointerEvents="none" style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Register Now</Text>
          </Button>

          <TouchableOpacity style={{ marginTop: 50, alignSelf: 'center' }} onPress={() => goBack()}>
            <Text style={{ fontSize: 18 }}>Go to Sign in</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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

export default Signup
