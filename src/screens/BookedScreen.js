import React from 'react' 
import { useSelector } from "react-redux"
// import {DATA} from '../data'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'


import { AppHeaderIcon } from '../conponents/AppHeaderIcon'
import { PostList } from '../conponents/PostList'

export const BookedScreen = ({navigation}) => {
    
    const openPostHandler = (post) => { // функуия которая передает строку "Post" в navigation.navigate
        navigation.navigate("Post", { postId: post.id,
                                      date: post.date,
                                      booked: post.booked
                                    })     //.. и эти переключает на скрин с ключем "Post"
    }
    
    const bookedPosts = useSelector(state=> state.post.bookedPosts)
    console.log(bookedPosts)

    return < PostList 
                data={bookedPosts} 
                onOpen={openPostHandler}
            />
}

BookedScreen.navigationOptions = ({navigation}) => ({
    headerTitle: "Избранное",

    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Rover" iconName="ios-menu" onPress={()=> navigation.toggleDawer()}/>
        </HeaderButtons>
        )
})

