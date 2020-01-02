import React from 'react' 
import {DATA} from '../data'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'


import { Post } from '../conponents/Post'
import { AppHeaderIcon } from '../conponents/AppHeaderIcon'
import { PostList } from '../conponents/PostList'

export const MainScreen = ({navigation}) => {
    
    const openPostHandler = (post) => { // функуия которая передает строку "Post" в navigation.navigate
        navigation.navigate("Post", { postId: post.id,
                                      date: post.date,
                                      booked: post.booked
                                    })     //.. и эти переключает на скрин с ключем "Post"
    }
    
    return  <PostList data={DATA} onOpen={openPostHandler} />
}

MainScreen.navigationOptions = {
    headerTitle: "Мой Блог",
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take Foto" iconName="ios-camera" onPress={()=>{console.log("PRESS PHOTO")}}/>
        </HeaderButtons>
        ),
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Rover" iconName="ios-menu" onPress={()=>{console.log("PRESS PHOTO")}}/>
        </HeaderButtons>
        )
}

// const style = StyleSheet.create({
//     wraper: {
//         padding: 10
//     },
// })