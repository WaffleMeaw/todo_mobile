import { StackNavigator } from 'react-navigation'
import { Signin, Signup, Home } from './scenes'
import App from './App'

const setCustomInitialPage = ''

const todo_mobile = StackNavigator(
  {
    App: {
      screen: App,
      navigationOptions: ({ navigation }) => ({
        header: null,
      })
    },
    Signin: {
      screen: Signin,
      navigationOptions: ({ navigation }) => ({
        header: null,
      })
    },
    Signup: {
      screen: Signup,
      navigationOptions: ({ navigation }) => ({
        header: null,
      })
    },
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null,
      })
    }
  },
  {
    initialRouteName: setCustomInitialPage ? setCustomInitialPage : 'Signin',
  }
)


export default todo_mobile