import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import VendingMachine from './components/VendingMachine';
import Item from './components/Item';
import './App.css';

const initialItems = [
  { id: 1, name: 'Coke', type: 'drink' },
  { id: 2, name: 'Pepsi', type: 'drink' },
  { id: 3, name: 'Sprite', type: 'drink' },
  { id: 4, name: 'Fanta', type: 'drink' },
  { id: 5, name: 'Mountain Dew', type: 'drink' },
  { id: 6, name: 'Dr. Pepper', type: 'drink' },
  { id: 7, name: 'Root Beer', type: 'drink' },
  { id: 8, name: 'Lemonade', type: 'drink' },
  { id: 9, name: 'Iced Tea', type: 'drink' },
  { id: 10, name: 'Water', type: 'drink' },
  { id: 11, name: 'Chocolate', type: 'sweet' },
  { id: 12, name: 'Candy', type: 'sweet' },
  { id: 13, name: 'Cookies', type: 'sweet' },
  { id: 14, name: 'Ice Cream', type: 'sweet' },
  { id: 15, name: 'Donuts', type: 'sweet' },
  { id: 16, name: 'Cake', type: 'sweet' },
  { id: 17, name: 'Brownies', type: 'sweet' },
  { id: 18, name: 'Pie', type: 'sweet' },
  { id: 19, name: 'Muffins', type: 'sweet' },
  { id: 20, name: 'Gummies', type: 'sweet' },
  { id: 21, name: 'Chips', type: 'snack' },
  { id: 22, name: 'Popcorn', type: 'snack' },
  { id: 23, name: 'Pretzels', type: 'snack' },
  { id: 24, name: 'Crackers', type: 'snack' },
  { id: 25, name: 'Cheese Balls', type: 'snack' },
  { id: 26, name: 'Trail Mix', type: 'snack' },
  { id: 27, name: 'Granola Bars', type: 'snack' },
  { id: 28, name: 'Fruit Snacks', type: 'snack' },
  { id: 29, name: 'Beef Jerky', type: 'snack' },
  { id: 30, name: 'Pop Tarts', type: 'snack' },
  { id: 31, name: 'Wafers', type: 'wafer' },
  { id: 32, name: 'Chocolate Bars', type: 'wafer' },
  { id: 33, name: 'Kit Kat', type: 'wafer' },
  { id: 34, name: 'Oreos', type: 'wafer' },
  { id: 35, name: 'Ritz Crackers', type: 'wafer' },
  { id: 36, name: 'Nutella Sticks', type: 'wafer' },
  { id: 37, name: 'Biscotti', type: 'wafer' },
  { id: 38, name: 'Toaster Strudel', type: 'wafer' },
  { id: 39, name: 'Twix', type: 'wafer' },
  { id: 40, name: 'Shortbread Cookies', type: 'wafer' },
];

const App = () => {

  const [availableItems, setAvailableItems] = useState(initialItems);
  const [slots, setSlots] = useState({
    drink: [null, null, null, null],
    sweet: [null, null, null, null],
    snack: [null, null, null, null],
    wafer: [null, null, null, null],
  });

  const handleDrop = (type, index, item) => {
    if (item.type !== type) {
      alert('Wrong item category! Please drop the item in the correct category.');
    }
  
    const newSlots = { ...slots };
    newSlots[type][index] = item;
    setSlots(newSlots);
  
    setAvailableItems(availableItems.filter(availableItem => availableItem.name !== item.name));
  };
  
  const handleItemRemove = (type, index) => {
    const newSlots = { ...slots };
    const removedItem = newSlots[type][index];
    newSlots[type][index] = null;
    setSlots(newSlots);

    setAvailableItems([...availableItems, removedItem]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h1 className="header">Virtual Vending Machine</h1>
        <div className="items">
          {availableItems.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </div>
        <VendingMachine slots={slots} onDrop={handleDrop} onItemRemove={handleItemRemove} />
      </div>
    </DndProvider>
  );
};

export default App;
