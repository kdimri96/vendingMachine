import React from 'react';
import Row from './Row';

const VendingMachine = ({ slots, onDrop, onItemRemove }) => {
  const rows = [
    { id: 'row1', type: 'drink' },
    { id: 'row2', type: 'sweet' },
    { id: 'row3', type: 'snack' },
    { id: 'row4', type: 'wafer' },
  ];

  return (
    <div className="vending-machine">
      {rows.map(row => (
        <Row key={row.id} type={row.type} slots={slots[row.type]} onDrop={onDrop} onItemRemove={onItemRemove} />
      ))}
    </div>
  );
};

export default VendingMachine;
