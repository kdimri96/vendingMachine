import React from 'react';
import Slot from './Slot';

const Row = ({ type, slots, onDrop, onItemRemove }) => {
  return (
    <div className="row">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <div className="slots">
        {slots.map((item, index) => (
          <Slot key={index} type={type} index={index} item={item} onDrop={onDrop} onItemRemove={onItemRemove} />
        ))}
      </div>
    </div>
  );
};

export default Row;
