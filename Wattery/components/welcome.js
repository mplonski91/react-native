import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BasicButton from './button';

const Welcome  = (props) => {
  
  return (
    <View>
      <Image 
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/glass.png')} />
      <Text style={styles.title}>
        Wattery
      </Text>
      <Text style={styles.description}>
        Power up your health, by drinking water!
      </Text>
      <BasicButton title="Next" 
      onPress={() => props.navigation.push('SignIn')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 200,
    alignSelf: 'center',
  },
  title: {
    marginTop: 16,
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    marginTop: 8,
    width: '40%',
    color: 'gray'
  }
})

export default Welcome