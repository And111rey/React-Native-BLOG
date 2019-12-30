import React from 'react' 
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import {DATA} from '../data'

import { Post } from '../conponents/Post'

export const MainScreen = ({navigation}) => {
    
    const openPostHandler = (post) => { // функуия которая передает строку "Post" в navigation.navigate
        navigation.navigate("Post", { postId: post.id, date: post.date })     //.. и эти переключает на скрин с ключем "Post"
    }
    
    return (
        <View style={style.wraper} >
            <FlatList 
                data={DATA}
                keyExtractor={post => post.id.toString()}
                onOpen={openPostHandler}
                renderItem={({item}) => {return < Post post={item} onOpen={openPostHandler}/>}}
            />
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: "Мой Блог"
}

const style = StyleSheet.create({
    wraper: {
        padding: 10
    },
})