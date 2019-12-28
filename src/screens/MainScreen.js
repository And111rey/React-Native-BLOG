import React from 'react' 
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import {DATA} from '../data'

import { Post } from '../conponents/Post'

export const MainScreen = ({navigation}) => {
    
    const goToPOst = () => {
        navigation.navigate("Post")
    }
    
    return (
        <View style={style.wraper} >
            <FlatList 
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) => {return < Post post={item} />}}
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