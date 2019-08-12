import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from '../app-header'
import TodoList from '../todo-list'
import SearchPanel from '../search-panel/search-panel'
import ItemStatusFilter from '../item-status-filter';
import './app.css'
const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1 },
        {label: 'Make Awesome App', important: true, id: 2 },
        {label: 'Have a lunch', important: false, id: 3 },
    ]
   
    return (
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
    
          <TodoList todos={todoData} />
        </div>
      );
    };

/* jsx Позволяет использовать выражения {foo.bar}
Аттрибуты называются camelCase
class = className, for = htmlFor
В свойства можно передавать любое значение
null, undefined, true и false в теле тегов игнорируются не вызывая ошибок
*/
export default App