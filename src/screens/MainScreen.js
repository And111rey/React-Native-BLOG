import React from "react"
import { View, Text, StyleSheet, Button, FlatList } from "react-native"
import { DATA } from "../data" // Импортируем самодельную базу данных бузадынных
import { Post } from "../components/Post"


export const MainScreen = ({ navigation }) => { 
// "MainScreen" уже был обвернутый в "createStackNavigator", автоматически к нему в пропсы приходит метод "navigation"
// у метода "navigation" есть свойство "navigate", певый параметр которого...
//... это открыть который ми регистрировали в "createStackNavigator" 
    
    const openPostHandler = (post) => { // приходит полный список параметров, которые прописаны в база данных     
        navigation.navigate("Post", {postId: post.id, date: post.date}) // 
        console.log(post)
    }

    return (
        <View style={styles.wrapper} >
            < FlatList 
                data={DATA} 
                keyExtractor={post => post.id.toString()}
                renderItem = {({item}) => <Post post={item}
                onOpen={openPostHandler}/>}
            />
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
    },
    wrapper: {
        padding: 10
    }
})