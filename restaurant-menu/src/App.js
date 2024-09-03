import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Persis Indian Grill</h1>
      </header>
      <div class="menu">
        <div class="menu-section">
            <h2>Appetizers</h2>
            <div class="menu-item">
                <h3>Gobi Manchurian</h3>
                <span>$12.99</span>
            </div>
            <div class="menu-item">
                <h3>Chilli Paneer</h3>
                <span>$12.99</span>
            </div>
            <div class="menu-item">
                <h3>Chilli Baby Corn</h3>
                <span>$12.99</span>
            </div>
        </div>
        <div class="menu-section">
            <h2>Main Courses</h2>
            <div class="menu-item">
                <h3>Navaratan Koorma</h3>
                <span>$15.99</span>
            </div>
            <div class="menu-item">
                <h3>Saag Paneer</h3>
                <span>$15.99</span>
            </div>
        </div>
        <div class="menu-section">
            <h2>Desserts</h2>
            <div class="menu-item">
                <h3>Gulab Jamun</h3>
                <span>$5.99</span>
            </div>
            <div class="menu-item">
                <h3>Carrot Halwa</h3>
                <span>$5.99</span>
            </div>
            <div class="menu-item">
                <h3>Rasmalai</h3>
                <span>$5.99</span>
            </div>
        </div>
        <div class="menu-section">
            <h2>Beverages</h2>
            <div class="menu-item">
                <h3>Mango Lassi</h3>
                <span>$3.99</span>
            </div>
            <div class="menu-item">
                <h3>Sugercane Juice</h3>
                <span>$5.99</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

