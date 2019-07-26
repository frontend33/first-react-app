import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'

const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1 },
        {label: 'Make Awesome App', important: true, id: 2 },
        {label: 'Have a lunch', important: false, id: 3 },
    ]
    const value = '<script>alert("React")</script>'
    return (
        <div>
            { value }
            <AppHeader></AppHeader>
            <SearchPanel></SearchPanel>
            <TodoList todos={todoData} ></TodoList>
        </div>
    )
}

/* jsx Позволяет использовать выражения {foo.bar}
Аттрибуты называются camelCase
class = className, for = htmlFor
В свойства можно передавать любое значение
null, undefined, true и false в теле тегов игнорируются не вызывая ошибок
*/


//Техника использует легковесные объекты которые описывают элементы на странице (виртуальный дом)
//сам тег h1 сам по себе очень большой и содержит много ключей (и такое же колличество ключей стилей)
// console.log('el', el)
//ReactDOM используем что бы отрендерить наш элемент на странице превращает реакт элемекнты в обычный браузерный
//дом элементы и рендерит их на странице
ReactDOM.render(<App />,
    document.getElementById('root'));
//Итог реакт элемент маленький легковесный объект который проще всего создать, в реакт работаем
// с виртуальным представлением дом дерева, нужно меньше ресурсов,памятии, времени процессов по сравнению с
// обычным дом деревом который используют огромные объекты и требует намного больше памяти

/*

Структура React проекта
Один компонент один файл
Помещаем все компоненты в папку components
Хорошие компоненты независимые компоненты
*/
