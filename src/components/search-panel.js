import React from "react";
import './search-panel.css';

// В JSX отличие атрибутов только for и class на htmlFor и className
const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "20px"
  };
  return (
    <input
      style={searchStyle}
      placeholder={searchText}
      autoComplete=""
      className="form-control search-input"
      htmlFor=""
      disabled
    />
  );
  //    В JSX правила более строгие название атрибутов нужно писать camelCase с маленькой буквы а в реакте компоненты с большой
};
export default SearchPanel;
