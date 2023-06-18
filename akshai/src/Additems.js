import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
const Additems = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef=useRef()
  return (
    <form action="" className='addForm' onSubmit={handleSubmit}>
          <label htmlFor="addItem">Add Items</label>
      <input type="text"
        ref={inputRef}
        autoFocus id='addItem'
        placeholder='Add item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} />
        <button type='submit' aria-label="Add Item"  onClick={() => inputRef.current.focus()}>< FaPlus/></button>
    </form>
    
  )
}

export default Additems 