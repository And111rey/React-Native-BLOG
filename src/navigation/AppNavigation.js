import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { THEM } from "../thems"

import { MainScreen } from '../screens/MainScreen' 
import { PostScreen } from '../screens/PostScreen'

import {Platform} from 'react-native'

// console.log(Platform)

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }
},{
    initialRouteName: "Main",
    defaultNavigationOptions: {
        headerStyle: {
            // backgroundColor: Platform.OS === 'android'? THEM.MAIN_COLOR:  "#fff"
            backgroundColor: Platform.OS === 'android'? '#383838':  "#fff"

        },
        headerTintColor: Platform.OS === 'android'? "#fff":  "black"
    }
})

export const AppNavigation = createAppContainer(PostNavigator)