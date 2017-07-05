import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MKTextField, MKButton } from 'react-native-material-kit'
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
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <MKTextField
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          tintColor={'#ff9010'}
          highlightColor={'#ed2a2a'}
          textInputStyle={{ color: '#4c4c4c', fontSize: 20, height: 40, marginBottom: -5 }}
          placeholder={'Email'}
          style={styles.textfield}
          floatingLabelEnabled={true}
          opacityAniDur={20}
        />
        <MKTextField
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          autoCapitalize={'none'}
          tintColor={'#ff9010'}
          highlightColor={'#ed2a2a'}
          textInputStyle={{ color: '#4c4c4c', fontSize: 20, height: 40, marginBottom: -5 }}
          placeholder={'Password'}
          style={styles.textfield}
          floatingLabelEnabled={true}
          opacityAniDur={20}
        />
        <MKTextField
          value={this.state.confirmPassword}
          onChangeText={(text) => this.setState({ confirmPassword: text })}
          autoCapitalize={'none'}
          tintColor={'#ff9010'}
          highlightColor={'#ed2a2a'}
          textInputStyle={{ color: '#4c4c4c', fontSize: 20, height: 40, marginBottom: -5 }}
          placeholder={'Confirm Password'}
          style={styles.textfield}
          floatingLabelEnabled={true}
          opacityAniDur={20}
        />
        <MKButton
          backgroundColor={'#ff9814'}
          shadowRadius={2}
          shadowOffset={{ width: 2, height: 2 }}
          shadowOpacity={0.5}
          shadowColor="black"
          style={{ width: 100, height: 40, justifyContent: 'center', alignSelf: 'center', marginBottom: 30 }}
          onPress={() => this.signup()}
        >
          <Text pointerEvents="none"
            style={{ color: '#4c4c4c', fontSize: 20, textAlign: 'center' }}>
            Sign up
          </Text>
        </MKButton>
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => goBack()}>
          <Text>Go to Sign in</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ffd484',
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
