import React, { Component } from 'react'
import './item-add-form.css'
export default class ItemAddForm extends Component {
    addItem = () => {
        console.log('item')
    }
    render() {
        return (
            <div className="item-add-form">
                <button
                    className="btn btn-outline-secondary"
                    onClick={ () => this.props.onAddedItem('test') }
                >
                    Add Item
                </button>
            </div>
        )
    }
}