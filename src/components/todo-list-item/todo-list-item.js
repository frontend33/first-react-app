import React, { Component } from 'react'
import './todo-list-item.css'
// const TodoListItem = (props) => {
//     return <span> { props.label } </span>
// }

// Наш класс наследует React.Component
// класс TodoListItem будет стоять в цепочке прототипов Component -> Component.prototype -> Object.prototype-> null
export default class TodoListItem extends Component {
    // В новом стандарте можно не в контсруктуре а использовать функцию в теле класса - привязаны к объекту
    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`)
    }
    // constructor () {
    //     /*
    //     Если класс наследует какой то другой класс мы обязательно вызываем конструктор класса явно
    //     при помощи super() и вызываем до того как в первый раз используем ключевое слово this
    //     дает доступ не только к супер конструктору, но и к любому методу объявленному в super классе
    //     */
    //     super()
    //     // super.reactComponent любой метод из Component, если нужно переопределить функцию просто ниже создаем 
    //     // метод reactComponent и можем переопределить
    //     this.onLabelClick = () => {
    //         console.log(`Done: ${this.props.label}`)
    //     }
    // }
    // В классе функция которая будет отображать наш компонент называется render
    render() {
        // В классе свойства хранятся как поле класса в this.props
        const { label, important = false } = this.props
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }
        return (
            <span className="todo-list-item">
                <span
                    className="todo-list-item-label"
                    style={style}
                    // onClick = { () => console.log(`Done: ${label}`) }>
                    onClick={ this.onLabelClick }>
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };
}

// const TodoListItemFunc = ({ label, important = false }) => {
//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     }
//     return (
//         <span className="todo-list-item">
//             <span
//                 className="todo-list-item-label"
//                 style={style}>
//                 {label}
//             </span>

//             <button type="button"
//                 className="btn btn-outline-success btn-sm float-right">
//                 <i className="fa fa-exclamation" />
//             </button>

//             <button type="button"
//                 className="btn btn-outline-danger btn-sm float-right">
//                 <i className="fa fa-trash-o" />
//             </button>
//         </span>
//     );
// };
