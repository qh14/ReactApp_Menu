import React, { useState } from 'react'
import './App.css';
import Categories from './Categories'
import MenuItem from './MenuItems'
import data from './resources/data'
const allcategories = ["all", ...new Set(data.map(item => item.category))]
function App() {
  const [menuItem, setMenuItem] = useState(data)
  const [categories, setCategories] = useState(allcategories)
  const filterItem = (category) => {
    console.log(category);
    if (category === "all") {
      setMenuItem(data);
      return;
    }
    const newFilter = data.filter((item) => item.category === category);
    console.log(newFilter);
    setMenuItem(newFilter);

  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories allcategories={categories} filterItem={filterItem} />
        <MenuItem items={menuItem} />
      </section>
    </main>
  );
}

export default App;
