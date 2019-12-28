import React from 'react' 
import { View, Text, StyleSheet, Button } from 'react-native'

export const PostScreen = ({ navigation }) => {

    const goBack = () => {
        navigation.push("Main")
    }
    return (
        <View style={style.center} >
            <Text>PostScreen</Text>
            <Button title="Go To Post" onPress={goBack}  />
        </View>
    )
}

PostScreen.navigationOptions = {
    headerTitle: "Мой НОМЕР 49",
    headerStyle: {
        backgroundColor: "red",
    },
    headerTintColor: "#fff" 
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})