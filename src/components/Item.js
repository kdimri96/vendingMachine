import React from 'react';
import { useDrag } from 'react-dnd';

const Item = ({ item }) => {
  const [{ isDragging }, ref] = useDrag({
    type: item.type,
    item: { name: item.name, type: item.type },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={ref} className="item" style={{ opacity }}>
      {item.name}
    </div>
  );
};

export default Item;
