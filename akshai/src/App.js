import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css';
import { useState } from 'react';
import Additems from './Additems';
import Searchitem from './Searchitem';
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('to do list'))
    // [
    //     {
    //     id: 1,
    //     checked: true,
    //     item: "Practice coding"
    //     },
    //     {
    //     id: 2,
    //     checked: false,
    //     item: "Play Cricket"
    //     },
    //     {
    //     id: 3,
    //     checked: false,
    //     item: "Read About AI"
    //     },
    //      {
    //     id: 4,
    //     checked: false,
    //     item: "Learn React"
    //     }
    // ]
  ) 
  const [newItem, setNewItem] = useState('')
  const [search,setSearch] = useState('')
    const addItem= (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id,checked:false, item }
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("to do list", JSON.stringify(listItems));
    }
  
    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem("to do list", JSON.stringify(listItems));
    }
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
         localStorage.setItem("to do list", JSON.stringify(listItems));
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log('newItem');
    addItem(newItem)
    setNewItem('')
    }
  return (
    <div>      
      <Header title="To Do List" />
      <Additems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Searchitem
        search={search}
        setSearch ={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete ={handleDelete}
      />
      <Footer length={ items.length} />
    </div>
    );
}



export default App;
