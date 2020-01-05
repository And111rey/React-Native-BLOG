import * as Font from 'expo-font'
import {DB} from "./db" 

export  async function bootsrap() {
    try {
        await Font.loadAsync({
            "open-bold": require('../assets/fonts/OpenSans-Bold.ttf'),
            "open-regular": require('../assets/fonts/OpenSans-Regular.ttf')
        })
        await DB.init()
        console.log("DATA_BASE STARTED.......")
    } catch(e) {
        console.log("ERROR -> " , e)
    }
} 