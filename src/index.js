import React from 'react'
import ReactDOM from 'react-dom'

// Корнем JSX элемента должен быть один элемент, для того чтобы использовать несколько тегов оборачиваем в div
// Преимущества JSX что он понимает js код
const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App']
    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    )
}

const AppHeader = () => {
    return <h1>My Todo List</h1>
}

// В JSX отличие атрибутов только for и class на htmlFor и className
const SearchPanel = () => {
    const searchText = 'Type here to search'
    const searchStyle = {
        fontSize: '20px'
    }
    return  <input
        style={searchStyle}
        placeholder={searchText}
        autoComplete = ""
        className="foo"
        htmlFor=""
        disabled
    />
//    В JSX правила более строгие название атрибутов нужно писать camelCase с маленькой буквы а в реакте компоненты с большой
}

const App = () => {
    const value = '<script>alert("React")</script>'
    return (
        <div>
            { value }
            <AppHeader></AppHeader>
            <SearchPanel></SearchPanel>
            <TodoList></TodoList>
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
