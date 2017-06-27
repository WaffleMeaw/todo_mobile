import { StackNavigator } from 'react-navigation'
import { Signin, Signup } from './scenes'
// import App from './App'

const todo_mobile = StackNavigator({
  // App: {
  //   screen: App,
  //   navigationOptions: ({ navigation }) => ({
  //     header: null,
  //   })
  // },
  Signin: {
    screen: Signin,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Signup: {
    screen: Signup,
  }
})

export default todo_mobile