import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Page01 = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>You Can Message Any Time 😉</Text>

      
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop : 30,
    backgroundColor: "#fff",

  },
  mainHeader: {
    font :25 ,
    color : "#344055",
    fontWeight: "500",
    
  }


});

export default Page01