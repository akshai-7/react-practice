import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <footer>Copy Right &copy; {year.getFullYear()} </footer>
  )
}

export default Footer