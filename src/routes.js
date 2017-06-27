import { StackNavigator } from 'react-navigation'
import { Home, About } from './scenes'
// import App from './App'

const todo_mobile = StackNavigator({
  // App: {
  //   screen: App,
  //   navigationOptions: ({ navigation }) => ({
  //     header: null,
  //   })
  // },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  About: {
    screen: About,
  }
})

export default todo_mobile