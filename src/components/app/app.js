import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AppHeader from '../app-header'
import TodoList from '../todo-list'
import SearchPanel from '../search-panel/search-panel'
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form'
import './app.css'

export default class App extends Component {
  maxId = 100
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ]
  }
  deleteItem = (id) => {
    console.log('del', id)
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      // setState не должен изменять текущий state  todoData.splice(idx, 1) - Не изменяем массив напрямую правила реакта
      // Методы которые изменяют (mutate) массив использовать нельзя
      // const newArray = [...before, ...after]
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];
      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }
    this.setState(({ todoData }) => {
      // Не изменяя существующий state
      const newArray = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArray
      }
    })

  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />

        </div>

        <TodoList todos={this.state.todoData}
          /* Любой компонент может генерировать собственные события (onDone, onAdded)
          Достаточно передать callback функцию как property, а затем вызвать ее из компонента когда наступило событие
          Через события данные поднимаются вверх по иерархии компонентов
          */
          onDeleted={this.deleteItem}
        />
        <ItemAddForm onAddedItem={this.addItem} />

      </div>
    );
  }

};

/* jsx Позволяет использовать выражения {foo.bar}
Аттрибуты называются camelCase
class = className, for = htmlFor
В свойства можно передавать любое значение
null, undefined, true и false в теле тегов игнорируются не вызывая ошибок
*/
// export default App