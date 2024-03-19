import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { FIREBASE_AUTH } from "../config/FirebaseConfig";
import { theme } from "../themes/theme";
import ActionButton from "../components/ActionButton";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Login Failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Sign Up Failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={password}
        autoCapitalize="none"
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        <>
          <ActionButton
            text="Login"
            onPress={handleSignIn}
            customStyle={loginButtonStyle}
          />
          <ActionButton
            text="Sign Up"
            onPress={handleSignUp}
            customStyle={signUpbuttonStyle}
          />
        </>
      )}
    </View>
  );
}

//actionbutton styles
const loginButtonStyle = {
  button: {
    backgroundColor: theme.colors.blueT,
    borderWidth:1,
    borderColor: theme.colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginTop: 24,
  },
  buttonText: {
    color: theme.colors.primary,
    fontFamily: theme.textVariants.semiBold,
    fontSize: theme.textVariants.s,
    marginLeft: 10,
    marginRight: 8,
  },
};
const signUpbuttonStyle = {
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginTop: 24,
  },
  buttonText: {
    color: theme.colors.grey00,
    fontFamily: theme.textVariants.semiBold,
    fontSize: theme.textVariants.s,
    marginLeft: 10,
    marginRight: 8,
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
    //alignItems: 'center'
  },
  input: {
    height: 40,
    borderRadius: 50,
    borderColor: theme.colors.grey300,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
export default LoginScreen;
