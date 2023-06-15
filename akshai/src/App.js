// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css';
import { useState } from 'react';
import Additems from './Additems';
function App() {
    const [items, setItems] = useState([
        {
        id: 1,
        checked: true,
        item: "Practice coding"
        },
        {
        id: 2,
        checked: false,
        item: "Play Cricket"
        },
        {
        id: 3,
        checked: false,
        item: "Read About AI"
        },
         {
        id: 4,
        checked: false,
        item: "Learn React"
        }
    ]) 
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
 
  return (
    <div>      
      <Header title="To Do List" />
      <Additems/>
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete ={handleDelete}
      />
      <Footer length={ items.length} />
    </div>
    );
}



export default App;
