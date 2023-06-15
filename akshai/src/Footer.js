import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer>Copy Right &copy; {year.getFullYear()}:{length} List {length === 1 ? "Item" : "Items"}</footer>
  )
}

export default Footer