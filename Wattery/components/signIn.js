import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import BasicButton from "./button";
import { AsyncStorage } from "react-native";

class SignIn extends Component {
  state = {
    login: "",
    password: "",
    isPasswordInvalid: false,
    canSubmit: false,
    data: null
  };

  componentDidMount() {
    (getData = async () => {
      try {
        const value = await AsyncStorage.getItem("auth");
        if (value !== null) {
          this.setState({
            data: JSON.parse(value)
          });
        }
      } catch (error) {}
    })();
  }

  validateForm = () => {
    if (
      this.state.login.length !== 0 &&
      this.state.password.length > 0 &&
      !this.state.isPasswordInvalid
    ) {
      return true;
    }
    return false;
  };

  setLogin = text => {
    const canSubmit = text.length > 0 ? this.validateForm() : false;
    this.setState({ login: text, canSubmit });
  };

  setAndValidatePassword = text => {
    let isPasswordInvalid = false;

    if (text.length < 2) {
      isPasswordInvalid = true;
    }
    const canSubmit = !isPasswordInvalid ? this.validateForm() : false;

    this.setState({
      password: text,
      isPasswordInvalid,
      canSubmit
    });
  };

  mockLogin = async () => {
    const { login, password, data } = this.state;

    if (login === data.login && password === data.password) {
      try {
        await AsyncStorage.setItem("userToken", "active");
        await this.props.navigation.navigate("Home");
      } catch (error) {}
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled={Platform.OS === "ios"}
      >
        <Text style={styles.title}> Zaloguj się do aplikacji</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Login"
          value={this.state.login}
          onChangeText={this.setLogin}
          returnKeyType="next"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.inputContainer]}
          secureTextEntry
          placeholder="Hasło"
          value={this.state.password}
          onChangeText={this.setAndValidatePassword}
          returnKeyType="done"
          autoCapitalize="none"
        />
        {this.state.isPasswordInvalid && (
          <Text style={styles.invalidPassword}>Hasło jest za krótkie</Text>
        )}
        <BasicButton
          title="Login"
          style={styles.loginButton}
          disabled={!this.state.canSubmit}
          onPress={this.mockLogin}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 32,
    justifyContent: "center"
  },
  loginButton: {
    marginTop: 16,
    backgroundColor: "#4E00B1"
  },
  inputContainer: {
    margin: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 20
  },
  invalidPassword: {
    color: "red"
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center"
  }
});

export default SignIn;
