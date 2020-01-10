import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { f, auth, database } from "./config/config.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.registerUser("testemailaddreqss@gmail.com", "fakeqpassword");

    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log("Logged in", user);
      } else {
        console.log("Logged out");
      }
    });
  }

    async function loginWithFacebook(){
    const { type, token } = await Expo.Facebook.logInWithReadPermission(
      'APP_ID',
      { permissions: ['public_profile'] }
    );

    if(type == 'success'){
      const credentials = auth.FacebookAuthProvider.credential(token);
    }
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
  //     console.log("logged out");
  //   })
  //   .catch(error => {
  //     console.log("error:", error);
  //   });

  render() {
    return (
      <View style={styles.container}>
        <Text style={newStyles.container}>
          Open up App.js to start working on your app! wank
        </Text>
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

const newStyles = StyleSheet.create({
  container: {
    color: "blue"
  }
});
