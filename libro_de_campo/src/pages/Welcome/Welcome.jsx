import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/platanera.jpg')}
        style={styles.logo}
      />
      <Text>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  logo: {
    marginLeft: '10px'
  }
})

export default Welcome