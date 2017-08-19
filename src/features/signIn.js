import * as firebase from 'firebase'

const signIn = (email, password) => {
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

export default signIn
