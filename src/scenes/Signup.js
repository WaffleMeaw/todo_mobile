//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Signup extends Component {
  static navigationOptions = {
    title: 'About',
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Text>Hello {params.name}</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Signup;
