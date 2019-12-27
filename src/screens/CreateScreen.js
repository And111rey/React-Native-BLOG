import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'

export const CreateScreen = ({}) => {
    return (
        <View style={style.center} >
            <Text>CreateScreen</Text>
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