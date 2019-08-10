import React from "react";

const Add = ({ value, onChange, onClickAdd }) => {
debugger
  return (
    <>
      <input type="text" id="myInput" placeholder="할일.." value={ value } onChange={ onChange }/>
      <span className="addBtn" onClick={ onClickAdd( value ) }>추가</span>
    </>
  )
};

export default Add;
