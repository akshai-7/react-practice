import React from 'react'
import Itemslist from './Itemslist';

// const Content = () => {

//     const [name, setName] = useState('Earn');
//     function handleNameChange(){
//     const names = ["Earn", "Grow", "Give"];
//     const int = Math.floor(Math.random() * 3);
//     // return names[int]
//         setName(names[int]);
//     }

//     // const handleClick = (e) => {
//     //     console.log(e.target.innerText);
//     // }
//     //    const handleClick2 = (name) => {
//     //     console.log(`Thanks ${name}`);
//     // }
//     const [count, setCount] = useState(100);
//     function incrementFunction() {
//         setCount(prevCount => prevCount+1);
//     }
//     function decrementFunction() {
//         setCount(prevCount => prevCount-1);
//     }
//   return (
//       <main>
//           {/* <p onClick={() => handleClick2('Akshai')}>Let's {handleNameChange()} Money</p>
//           <button onClick={(e) => handleClick(e)}>Subscribe</button> */}
//           {/* <button onClick={() => handleClick2('Akshai')}>Subscribe</button> */}
//           {/* <p>Lets Earn Money</p>
//           <button>Subscribe</button>
//           <button onClick={decrementFunction}>-</button>
//           <span>{count}</span>
//           <button onClick={incrementFunction}>+</button> */}

//           <p>Lets {name} Money</p>
//           <button onClick={handleNameChange}>Subscribe</button>
//       </main>
//   )
// }

const Content = ({ items,handleCheck,handleDelete }) => {
    return (
        <>
        {(items.length) ? (
                <Itemslist
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete ={handleDelete}
                />
            ) : (
                    <p>Your List is Empty</p>
            )
        }
        </> 
    );
}

export default Content