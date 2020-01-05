import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from "../types"
import { DB } from "../../db"
import * as FileSystem from 'expo-file-system' // для работы с файловой сичтемой телефона
// import { DATA } from "../../data"


export const loadPosts = () => {
    return async dispatch => {
        const posts = await DB.getPost()
        dispatch({
            type: LOAD_POSTS,
            payload: posts
        })
    }
}

export const toogleBooked = id => {
    return {
        type: TOGGLE_BOOKED,
        payload: id
    }
}

export const removePost = id => {
    return {
        type: REMOVE_POST,
        payload: id
    }
}

export const addPost = post => async dispatch => {
    console.log("**** ",post)
    const fileName = post.img.split('/').pop()      //получаем название файла
    const newPath = FileSystem.documentDirectory + fileName //путь для хранения картинки


    try {
        await FileSystem.moveAsync({          //спостоб асинхронного перемещения файлов
            to: newPath,                // куда
            from: post.img              // откуда, 
    
        })
    }catch(e){
        console.log(" Ошибка в -addPost- в перемещении файла  ", e)
    }

    const payload = {...post, img: newPath}
    const id = await DB.createPost(payload)
    payload.id = id
    dispatch({
        type: ADD_POST,
        payload: payload
    })
}