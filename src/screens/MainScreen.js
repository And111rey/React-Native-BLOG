import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"


export const MainScreen = ({ navigation }) => { 
// "MainScreen" уже был обвернутый в "createStackNavigator", автоматически к нему в пропсы приходит метод "navigation"
// у метода "navigation" есть свойство "navigate", певый параметр которого...
//... это открыть который ми регистрировали в "createStackNavigator" 
    const goToPost = () => {
        navigation.navigate("Post")
    }

    return (
        <View style={styles.center} >
            <Text>MainScreen</Text>
            <Button title="Go to Post" onPress={goToPost} />
        </View>
    )
}


// "MainScreen" уже был обвернутый в "createStackNavigator", по тому у немго появляется дополнителтный функционал
MainScreen.navigationOptions = {    // данный скрин уже отрисуется с местом для ХЕДЕРА
    headerTitle: "Мой блог"         // Данное свойство дает возможность работать  с ХЕДЕРОМ 
}

const styles  = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center", // выровнять по вертикале
        alignItems: "center"      // выровнять по горизотнале
    }
})