import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { MKTextField, MKButton } from 'react-native-material-kit'
import * as firebase from 'firebase'

class Signin extends Component {
  state = {
    email: '',
    password: '',
  }

  signin() {
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res.email)
        console.log(res.emailVerified)
        console.log(res.uid)
        this.props.navigation.navigate('Home')
      })
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)
      })
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.title}>To Do</Text>
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
        <MKButton
          backgroundColor={'#ff9814'}
          shadowRadius={2}
          shadowOffset={{ width: 2, height: 2 }}
          shadowOpacity={0.5}
          shadowColor="black"
          style={{ width: 100, height: 40, justifyContent: 'center', marginBottom: 30, alignSelf: 'center' }}
          onPress={() => this.signin()}
        >
          <Text pointerEvents="none" style={{ color: '#4c4c4c', fontSize: 20, textAlign: 'center' }}>
            Sign In
          </Text>
        </MKButton>
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigate('Signup')}>
          <Text>Sign up</Text>
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

export default Signin
