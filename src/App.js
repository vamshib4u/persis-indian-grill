import React from 'react';
import './App.css';

// Sample data for the menu
const menuData = {
  appetizers: [
    { name: 'Gobi Manchurian', price: '$12.99' },
    { name: 'Chilli Paneer', price: '$12.99' },
    { name: 'Chilli Baby Corn', price: '$12.99' },
  ],
  mainCourses: [
    { name: 'Navaratan Koorma', price: '$14.99' },
    { name: 'Saag Paneer', price: '$14.99' }
  ],
  desserts: [
    { name: 'Gulab Jamun', price: '$5.99' },
    { name: 'Carrot Halwa', price: '$5.99' },
    { name: 'Rasmalai', price: '$5.99' },
  ],
  beverages: [
    { name: 'Mango Lassi', price: '$3.99' },
    { name: 'Fresh Sugercane Juice', price: '$4.99' }
  ],
};

function MenuSection({ title, items }) {
  return (
    <div className="menu-section">
      <h2>{title}</h2>
      {items.map((item, index) => (
        <div key={index} className="menu-item">
          <h3>{item.name}</h3>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/images/persislogo.png`} className="App-logo" alt="logo" />
        <h1>Welcome to Persis Indian Grill</h1>
      </header>
      <div className="menu">
        <MenuSection title="Special Appetizers" items={menuData.appetizers} />
        <MenuSection title="Special Main Courses" items={menuData.mainCourses} />
        <MenuSection title="Special Desserts" items={menuData.desserts} />
        <MenuSection title="Special Beverages" items={menuData.beverages} />
      </div>
    </div>
  );
}

export default App;
