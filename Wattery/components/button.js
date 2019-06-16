import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const BasicButton = (props) => (
  <TouchableOpacity
    disabled={props.disabled}
    style={[
      styles.container,
      props.style,
      props.disabled && styles.disabled,
    ]}
    onPress={props.onPress}
  >
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  disabled: {
    backgroundColor: 'lightgrey'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    color: 'white'
  }
})

export default BasicButton;
