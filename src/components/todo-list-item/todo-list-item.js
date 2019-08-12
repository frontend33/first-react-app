import React, { Component } from 'react'
import './todo-list-item.css'
// const TodoListItem = (props) => {
//     return <span> { props.label } </span>
// }

// Наш класс наследует React.Component
export default class TodoListItem extends Component {
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
                    style={style}>
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
