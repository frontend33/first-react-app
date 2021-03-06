// Корнем JSX элемента должен быть один элемент, для того чтобы использовать несколько тегов оборачиваем в div
// Преимущества JSX что он понимает js код
import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    /*
        Массив можно передать как свойство
        В JSX можно вставлять массивы элементов (не только по одному)
        Можно передать все свойства объекта в компонент используя Object spread оператор не перечисляя каждое
    */

    // Вместо того что бы сравнивать элементы один за другим React смотрит на уникальные ключи сопоставляя элементы между
    //собой тем самым если ключа нет реакт добавит <li> точечно не обновляя весь ul если ключ есть то реакт не будет обновлять элемент
    //Вывод нет ни какого смысла использовать индекс элемента в массиве потому что по умолчанию  не получим производительность за которую борится реакт

    //Вывод каждому JSX элементу в массиве нужно уникальное свойство key
    // React использует key что бы эффективно сравнивать элементы при обновлении
    // Не стоит делать ключи из индекса массива
    const elements = todos.map((item) => {
        // В свойстве  itemProps будут все свойства кроме id
        const { id, ...itemProps } = item
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    /* Не будем передавать id в spread оператор */
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
           </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default TodoList
