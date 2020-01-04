import React,{useEffect} from 'react' 
// import {DATA} from '../data'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from  "react-redux"

import { loadPosts } from "../store/actions/post"
import { AppHeaderIcon } from '../conponents/AppHeaderIcon'
import { PostList } from '../conponents/PostList'

export const MainScreen = ({navigation}) => {
    
    const openPostHandler = (post) => { // функуия которая передает строку "Post" в navigation.navigate
        navigation.navigate("Post", { postId: post.id,
                                      date: post.date,
                                      booked: post.booked
                                    })     //.. и эти переключает на скрин с ключем "Post"
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadPosts())
    }, [])
    const allPosts = useSelector(state=> state.post.allPosts)

    return  <PostList data={allPosts} onOpen={openPostHandler} />
}

MainScreen.navigationOptions = ({navigation}) => ({
    headerTitle: "Мой Блог",
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take Foto" iconName="ios-camera" onPress={()=>navigation.push('Create')}/>
        </HeaderButtons>
        ),
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Rover" iconName="ios-menu" onPress={()=> navigation.toggleDrawer()}/>
        </HeaderButtons>
        )
})

