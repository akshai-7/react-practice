import React from 'react'
import { FaPlus } from 'react-icons/fa'
const Additems = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form action="" className='addForm' onSubmit={handleSubmit}>
          <label htmlFor="addItem">Add Items</label>
          <input type="text" autoFocus id='addItem' placeholder='Add item' required  value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
          <button type='submit' aria-label="Add Item">< FaPlus/></button>
    </form>
    
  )
}

export default Additems 