
import React,{useState} from "react"
import { View, StyleSheet,Text } from 'react-native'
import {AppLoading} from "expo"
import { bootsrap } from "./src/bootstrap" 
import { AppNavigation } from './src/navigation/AppNavigation'
import { Provider } from "react-redux"
import store from './src/store' 


export default function App() {

  const [isReady, setIsReady] = useState(false)
  if(!isReady) {
    return (
    < AppLoading 
      startAsync={bootsrap}
      onFinish={()=>{setIsReady(true)}}
      onError={err => console.log(err)} 
    />
    )
  }

  return (
          <Provider store={store}>
            < AppNavigation />
          </Provider>
  )}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
