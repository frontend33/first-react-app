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

const SearchPanel = () => {
    const searchText = 'Type here to search'
    return  <input placeholder={searchText}/>
}

const App = () => {
    // const  isLoggedIn = true
    // const loginBox = <span>Log in please</span>
    // const welcomeBox = <span>Welcome Back</span>
    return (
        <div>
            {/*{ isLoggedIn ? welcomeBox : loginBox }*/}
            <AppHeader></AppHeader>
            <SearchPanel></SearchPanel>
            <TodoList></TodoList>
        </div>
    )
}

// блок jsx кода можно было бы создать как ниже (babel увидит jsx и компилирует код в js)
// const el = React.createElement('h1', null, 'Hello World!!');
// Если блок кода состоит из нескольких строк его следует поместить в круглые скобки
// const el =  <App></App>
// const el = <h1> Hello world </h1>


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
