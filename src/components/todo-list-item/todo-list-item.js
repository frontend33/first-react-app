import React, { Component } from 'react'
import './todo-list-item.css'

/*
Централизовать управление данными хорошая практика
Если данные нужно использовать в нескольких компонентах - их нужно хранить в родительском компоненте
Что бы поднять данные вверх по иррархии компонентов используйте события
*/

// Наш класс наследует React.Component
// класс TodoListItem будет стоять в цепочке прототипов Component -> Component.prototype -> Object.prototype-> null
export default class TodoListItem extends Component {


    // В новом стандарте можно не в контсруктуре а использовать функцию в теле класса - привязаны к объекту

    // constructor () {
    //     /*
    //     Если класс наследует какой то другой класс мы обязательно вызываем конструктор класса явно
    //     при помощи super() и вызываем до того как в первый раз используем ключевое слово this
    //     дает доступ не только к супер конструктору, но и к любому методу объявленному в super классе
    //     */
    //     super()

    // В классе функция которая будет отображать наш компонент называется render
    render () {
        // В классе свойства хранятся как поле класса в this.props
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props
        // const { ,  } = this.state
        let classNames = 'todo-list-item'
        if (done) {
            // меняем только один элемент, реакт находит, что у элемента изменился класс и меняет только его
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }
        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };
}

