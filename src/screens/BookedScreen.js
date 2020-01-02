import React from 'react' 
import {DATA} from '../data'
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
    
    return < PostList 
                data={DATA.filter(post => post.booken)} 
                onOpen={openPostHandler}
            />
}

BookedScreen.navigationOptions = {
    headerTitle: "Избранное",

    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Rover" iconName="ios-menu" onPress={()=>{console.log("PRESS PHOTO")}}/>
        </HeaderButtons>
        )
}

