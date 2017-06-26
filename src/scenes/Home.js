import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { MKTextField, MKButton } from 'react-native-material-kit'

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}>To Do</Text>
        <MKTextField
          tintColor={'#ff9010'}
          highlightColor={'#ed2a2a'}
          textInputStyle={{ color: '#4c4c4c', fontSize: 20, height: 40, marginBottom: -5 }}
          placeholder={'Email'}
          style={styles.textfield}
          floatingLabelEnabled={true}
          opacityAniDur={20}
        />
        <MKTextField
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
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.5}
          shadowColor="black"
          style={{ width: 100, height: 40, justifyContent: 'center', marginLeft: 25, }}
          onPress={() => navigate('About', { name: 'John' })}
        >
          <Text pointerEvents="none"
            style={{ color: '#4c4c4c', fontSize: 20, textAlign: 'center'}}>
            Sign In
          </Text>
        </MKButton>
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

export default Home
