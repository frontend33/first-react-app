// Корнем JSX элемента должен быть один элемент, для того чтобы использовать несколько тегов оборачиваем в div
// Преимущества JSX что он понимает js код
import React from "react";
import TodoListItem from "./todo-list-item";
const TodoList = ({ todos }) => {
    const items = ['Learn React', 'Build Awesome App']
/*
    Массив можно передать как свойство
    В JSX можно вставлять массивы элементов (не только по одному)
    Можно передать все свойства объекта в компонент используя Object spread оператор не перечисляя каждое
*/

    const elements = todos.map((item) => {
       return (
           <li>
               <TodoListItem
                   // label={item.label}
                   // important={item.important}
                   /*Используем spread оператор*/
                   { ...item }
               />
           </li>
       )
    })

    return (
        <ul>
            { elements }
        </ul>
    )
}

const AppHeader = () => {
    return <h1>My Todo List</h1>
}

export default TodoList
