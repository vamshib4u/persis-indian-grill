import React from 'react';
import './App.css';

// Sample data for the menu
const menuData = {
  appetizers: [
    { name: 'Bruschetta', price: '$5.99' },
    { name: 'Stuffed Mushrooms', price: '$6.99' },
    { name: 'Garlic Bread', price: '$4.99' },
  ],
  mainCourses: [
    { name: 'Grilled Salmon', price: '$15.99' },
    { name: 'Spaghetti Carbonara', price: '$12.99' },
    { name: 'Chicken Parmesan', price: '$13.99' },
  ],
  desserts: [
    { name: 'Tiramisu', price: '$6.99' },
    { name: 'Cheesecake', price: '$5.99' },
    { name: 'Chocolate Lava Cake', price: '$7.99' },
  ],
  beverages: [
    { name: 'Coffee', price: '$2.99' },
    { name: 'Fresh Orange Juice', price: '$3.99' },
    { name: 'Red Wine', price: '$6.99' },
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
        <h1>Welcome to Our Restaurant</h1>
      </header>
      <div className="menu">
        <MenuSection title="Appetizers" items={menuData.appetizers} />
        <MenuSection title="Main Courses" items={menuData.mainCourses} />
        <MenuSection title="Desserts" items={menuData.desserts} />
        <MenuSection title="Beverages" items={menuData.beverages} />
      </div>
    </div>
  );
}

export default App;
