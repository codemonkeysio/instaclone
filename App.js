import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { f, auth, database } from "./config/config.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.registerUser('testemailaddress@gmail.com', 'fakepassword')

    f.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("Logged in", user);
      } else {
        console.log("Logged out");
      }
    });
  }

  registerUser = (email, password) => {
    console.log(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userObj => console.log(email, password, userObj))
      .catch(error => console.log("error logging in", error));
  };

  // auth
  //   .signOut()
  //   .then(() => {
  //     console.log('Logged out...')
  //   })
  //   .catch(error => {
  //     console.log('Error:', error)
  //   })

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
