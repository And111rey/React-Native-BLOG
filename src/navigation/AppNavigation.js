import React from "react"
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { THEM } from "../thems"
import { Ionicons } from "@expo/vector-icons"
import { MainScreen } from '../screens/MainScreen' 
import { PostScreen } from '../screens/PostScreen'
import { BookedScreen } from "../screens/BookedScreen"
import {Platform} from 'react-native'

// console.log(Platform)

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }
},
{
    initialRouteName: "Main",
    defaultNavigationOptions: {
        headerStyle: {
            // backgroundColor: Platform.OS === 'android'? THEM.MAIN_COLOR:  "#fff"
            backgroundColor: Platform.OS === 'android'? '#383838':  "#fff"

        },
        headerTintColor: Platform.OS === 'android'? "#fff":  "black"
    }
})


const BookedNavigator = createStackNavigator({
  Booked: BookedScreen,
  Post: PostScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                // backgroundColor: Platform.OS === 'android'? THEM.MAIN_COLOR:  "#fff"
                backgroundColor: Platform.OS === 'android'? '#383838':  "#fff"

            },
            headerTintColor: Platform.OS === 'android'? "#fff":  "black"
        }
    }   
)

const BottomNavigator = createBottomTabNavigator({
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarIcon: info => < Ionicons name="ios-albums" size={25} color={ info.tintColor } />
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions:{
            tabBarIcon: info => < Ionicons name="ios-star" size={25} color={info.tintColor} />
        }
    }

},
{
    tabBarOptions: {
        activeTintColor: THEM.MAIN_COLOR
    }
})

export const AppNavigation = createAppContainer(BottomNavigator)