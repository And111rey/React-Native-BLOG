import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'

export const AboutScreen = ({}) => {
    return (
        <View style={style.center} >
            <Text>AboutScreen</Text>
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