import React from 'react'
import './app-header.css'
const AppHeader = ({toDo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>My Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2> 
        </div>
    )
    
}
export default AppHeader

/* У функций нет внутреннего состояния какого то свойства компонента которые могут изменяться 
В Реакт есть второй тип компонентов основанные на классах, классы используются когда у компонентов должно быть внутреннее состояние
большинстов динамических интерактивных компонентов будут иметь внутреннее состояние
*/