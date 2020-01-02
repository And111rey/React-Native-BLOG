import React from 'react' 
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import {DATA} from '../data'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'


import { Post } from '../conponents/Post'
import { AppHeaderIcon } from '../conponents/AppHeaderIcon'

export const BookedScreen = ({navigation}) => {
    
    const openPostHandler = (post) => { // функуия которая передает строку "Post" в navigation.navigate
        navigation.navigate("Post", { postId: post.id,
                                      date: post.date,
                                      booked: post.booked
                                    })     //.. и эти переключает на скрин с ключем "Post"
    }
    
    return (
        <View style={style.wraper} >
            <FlatList 
                data={DATA.filter(post => post.bookd )}
                keyExtractor={post => post.id.toString()}
                onOpen={openPostHandler}
                renderItem={({item}) => {return < Post post={item} onOpen={openPostHandler}/>}}
            />
        </View>
    )
}

BookedScreen.navigationOptions = {
    headerTitle: "Избранное",

    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Rover" iconName="ios-menu" onPress={()=>{console.log("PRESS PHOTO")}}/>
        </HeaderButtons>
        )
}

const style = StyleSheet.create({
    wraper: {
        padding: 10
    },
})