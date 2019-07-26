// Корнем JSX элемента должен быть один элемент, для того чтобы использовать несколько тегов оборачиваем в div
// Преимущества JSX что он понимает js код
import React from "react";
import TodoListItem from "./todo-list-item";
const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App']
    return (
        <ul>
            <li>{ <TodoListItem label= "Drink Coffee" /> }</li>
            <li>{ <TodoListItem
                label= "Build Awesome App"
                important
            /> }</li>
        </ul>
    )
}

const AppHeader = () => {
    return <h1>My Todo List</h1>
}

export default TodoList
