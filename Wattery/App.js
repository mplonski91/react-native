import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";

import Welcome from './components/welcome';
import SignIn from './components/signIn'
import Dashboard from './views/dashboard';
import Profile from "./views/profile";
import EditPassword from "./views/editPassword";

const ProfileNavigator = createStackNavigator({
  Profile: Profile,
  Edit: EditPassword,
});

const HomeNavigator = createBottomTabNavigator({
  Home: Dashboard,
  Profile: ProfileNavigator,
});

const AuthNavigator = createStackNavigator({
  Welcome: Welcome,
  SignIn: SignIn,
}, {
  headerMode: 'none'
}
)

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppContainer/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
