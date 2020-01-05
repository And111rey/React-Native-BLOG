import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('post.db') // открыть базу данных под названием 'post.db'

export class DB {       // создае класс со статическими методали
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    "CREATE TABLE IF NOT EXISTS posts1 (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INT)",
                    [],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }

    static getPost() {
        return new Promise((resolve, reject) => {
            db.transaction(tx =>{
                tx.executeSql(
                   'SELECT * FROM posts1',
                   [],
                   (_, result ) => resolve(result.rows._array),
                   (_, error) => reject(error)
                )
            })
        })
    }

    static createPost({ text, date, booked, img }) {
        return new Promise((resolve, reject) => {
            db.transaction (tx => {
                tx.executeSql(
                    `INSERT INTO posts1 (text, date, booked, img ) VALUES (?, ?, ?, ?)`, // это длязащити, сюда попатет то что в массиве ниже
                    [text,date, booked, img], //последовательность должна совпадать с последовательностью в таблицы
                    (_, result)=> resolve(result.insertId),  // "insertId" это то значение ID  дано автоматически 
                    (_, error) => reject(error)
                )
            })
        })
    }
}