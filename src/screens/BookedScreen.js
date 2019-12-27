import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'

export const BookedScreen = ({}) => {
    return (
        <View style={style.center} >
            <Text>BookedScreen</Text>
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