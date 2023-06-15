import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Lineitem = ({item,handleCheck,handleDelete}) => {
  return (
    <li className='item' key={item.id}> 
            <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
            <label onDoubleClick={() => handleCheck(item.id)}  style={(item.checked) ? {textDecoration:'line-through'}:null }>{item.item}</label>
          <FaTrashAlt role='button' onClick={() => handleDelete(item.id)} tabIndex="0" aria-label={ `Delete${item.item}`} />
    </li> 
  )
}

export default Lineitem