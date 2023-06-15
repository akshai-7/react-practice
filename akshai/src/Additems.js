import React from 'react'
import { FaPlus } from 'react-icons/fa'
const Additems = () => {
  return (
    <form action="" className='addForm'>
          <label htmlFor="addItem">Add Items</label>
          <input type="text" autoFocus id='addItem' placeholder='Add item' required />
          <button type='submit' aria-label="Add Item">< FaPlus/></button>
    </form>
    
  )
}

export default Additems