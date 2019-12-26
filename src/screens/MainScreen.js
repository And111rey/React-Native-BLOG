import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'

export const MainScreen = ({}) => {
    return (
        <View>
            <Text>MainScreen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})