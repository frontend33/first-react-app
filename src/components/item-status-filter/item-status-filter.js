import React, { Component } from "react";
import "./item-status-filter.css";

// Если не видим причин использовать компонент класс то используем функцию
// Если нужно работать с внутренним состоянием используем класс
export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>
      </div>
    );
  }
}

// const ItemStatusFilter = () => {
//   return (
//     <div className="btn-group">
//       <button type="button" className="btn btn-info">
//         All
//       </button>
//       <button type="button" className="btn btn-outline-secondary">
//         Active
//       </button>
//       <button type="button" className="btn btn-outline-secondary">
//         Done
//       </button>
//     </div>
//   );
// };

// export default ItemStatusFilter
