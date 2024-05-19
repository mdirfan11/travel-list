import ItemForm from "./components/ItemForm";
import Logo from "./components/Logo";
import PackingItems from "./components/PackingItems";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {

  const [items, setItems] = useState([]);

  function handelAddItems(newItems) {
    setItems(items => [...items, newItems]);
  }

  function handelDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handelToggelItem(id) {
    setItems(items => items.map(
      item => item.id === id ? {...item, packed: !item.packed} : item
    ))
  }

  function handelClearList() {
    const confirmed = window.confirm("Are you sure you want to clear all items?");
    if (confirmed) setItems([]);
  }
 
  return (
    <div className="app">
      <Logo />
      <ItemForm onAddItem={handelAddItems}/>
      <PackingItems items={items} 
        onDeleteItem={handelDeleteItem} 
        onToggleItem={handelToggelItem} 
        onClearItems={handelClearList}
      />
      <Stats items={items}/>
    </div>
  );
}

export default App;