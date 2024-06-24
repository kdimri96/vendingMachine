import React from 'react';
import { useDrop, useDrag } from 'react-dnd';

const Slot = ({ type, index, item, onDrop, onItemRemove }) => {
  const [{ canDrop, isOver }, ref] = useDrop({
    accept: [type, 'availableItem'],
    drop: (draggedItem) => {
      console.log("here", draggedItem.type, type )
      if (draggedItem.type === type) {
        onDrop(type, index, draggedItem);
      } else if(draggedItem.type !== type) {
        alert('Wrong item category! Please drop the item in the correct category.');
      }else {
        onItemRemove(type, index);
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'availableItem',
    item: { name: item ? item.name : '', type: item ? item.type : '' },
    canDrag: () => !!item,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    end: (draggedItem, monitor) => {
      if (!monitor.didDrop()) {
        onItemRemove(type, index);
      }
    },
  });

  const isActive = canDrop && isOver;

  return (
    <div
      ref={ref}
      className={`slot ${isActive ? 'slot-active' : canDrop ? 'slot-can-drop' : ''}`}
    >
      {item ? (
        <div ref={drag} className="item" style={{ opacity: isDragging ? 0.4 : 1 }}>
          {item.name}
        </div>
      ) : (
        isActive ? 'Release to drop' : 'Drag an item here'
      )}
    </div>
  );
};

export default Slot;
