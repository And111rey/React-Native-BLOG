import { StyleSheet, Text, View } from 'react-native';
import React from  "react"


export  default function App() {
  return (
    <View style={styles.conteiner}>
      <Text>Hello</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center' 
  }
})