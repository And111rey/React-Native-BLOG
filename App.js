import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from "expo"
import { bootstrap } from './src/bootstrap'; //модуль со шрифтами

import { AppNavigator } from "./src/navigation/AppNavigation"

export default function App() {

  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return < AppLoading 
      startAsync={bootstrap}    //передаем шрифты
      onFinish={() => {setIsReady(true)}}
      onError={err => console.log(err)} 
    />
  } 
  
  return < AppNavigator /> // оболочка со всеми скринами
}

