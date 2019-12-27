import React from 'react' 
import { View, Text, StyleSheet, Button } from 'react-native'

export const MainScreen = ({navigation}) => {
    
    const goToPOst = () => {
        navigation.navigate("Post")
    }
    
    return (
        <View style={style.center} >
            <Text>MainScreen</Text>
            <Button title="Go to POST" onPress={goToPOst}/>
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: "Мой Блог"
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})