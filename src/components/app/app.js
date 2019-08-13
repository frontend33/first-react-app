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
      this.createToDoItem('Drink Coffee'),
      this.createToDoItem('Make Awesome App'),
      this.createToDoItem('Have a lunch')
    ]
  }
  createToDoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
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
    const newItem = this.createToDoItem(text)
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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    // Новый объект с новым свойством
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    }
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {

      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })

  }
  onToggleImportant = (id) => {
    console.log('toggle important', id)
    this.setState(({ todoData }) => {

      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }


  render() {
    const { todoData } = this.state
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />

        </div>

        <TodoList todos={todoData}
          /* Любой компонент может генерировать собственные события (onDone, onAdded)
          Достаточно передать callback функцию как property, а затем вызвать ее из компонента когда наступило событие
          Через события данные поднимаются вверх по иерархии компонентов
          */
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
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