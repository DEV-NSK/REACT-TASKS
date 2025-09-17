/**
 *         MOUSE EVENTS
 * 
 *  1.onClick() => action performed on single click
 *  2.onDoubleClick() => action performed on double click
 *  3.onMouseEnter() => action performed when cursor hovered the element
 *  4.onMouseLeave => action performed when cursor removing from element
 *  5.onMouseDown => action performing when mouse wheel scrolled downwards / drag/drop actions
 *  6.onMouseUp => action performed when mouse wheel scrolled upwards
*/

// // onClick() => action on clicking button
// const App = () => {
//     const HandleClick = () => {
//         alert("Clicked the button")
//     }
//   return (
//     <div>
//       <center>
//         <button onClick={HandleClick}>Hii</button>
//       </center>
//     </div>
//   )
// }
// export default App



// // onDoubleClick => action on double clicking button
// const App = () => {
//     const HandleClick = () =>  {
//         alert("Double clicked")
//     }
//   return (
//     <div>
//       <center>
//         <button onDoubleClick={HandleClick}>
//             DoubleClick
//         </button>
//       </center>
//     </div>
//   )
// }
// export default App



// // onMouseEnter => action on hovering the button
// const App = () => {
//     const HandleMouse = () => {
//         alert("On Mouse hover in")
//     }
//   return (
//     <div>
//       <center>
//         <button onMouseEnter={HandleMouse}>
//             Hover - in
//         </button>
//       </center>
//     </div>
//   )
// }
// export default App



// // onMouseLeave => action on while hovering off from the button
// const App = () => {
//     const Handle = ( )=> {
//         alert("On mouse leave")
//         console.log("Mouse hover out in leave")
//     }
//   return (
//     <div>
//       <center>
//         <p onMouseLeave={Handle}>Hii</p>
//       </center>
//     </div>
//   )
// }
// export default App



// // onMouseDown => action on performing mouse wheel down - drag/drop
// const App = () => {
//     const Handle = () => {
//         alert("On mouse Down")
//     }
//   return (
//     <div>
//       <center>
//         <button onMouseDown={Handle}>
//             hii
//         </button>
//       </center>
//     </div>
//   )
// }
// export default App



// // OnMOuseUp => action on performing mouse wheel up
// const App = () => {
//     const Handle = () => {
//         alert("On mouse wheel up")
//     }
//   return (
//     <div>
//       <center>
//         <button onMouseUp={Handle}>
//             hello
//         </button>
//       </center>
//     </div>
//   )
// }
// export default App






/**
 *              KEYBOARD EVENTS
 * 
 * 1.onKeyDown => triggers when key is pressed
 * 2.onKeyUp => triggers when a key is released
 */

// // onKeyDown => Triggers when a key pressed down
// import react, {useState} from "react"
// const App = () => {
//     const[state, setState] = useState("")
//     const Handle = (e) => {
//         setState(`key pressed: ${e.key}`)
//     }
//   return (
//     <div>
//       <center>
//         <input type="text" onKeyDown={Handle} />
//       </center>
//       <p>
//         {state}
//       </p>
//     </div>
//   )
// }
// export default App



// // onKeyUp => Triggers when a key is released
// import React, {useState} from 'react'
// const App = () => {
//     const [state, setState] = useState("")
//     const Handle = (e) => {
//         setState(`Key pressed: ${e.key}`)
//     }
//   return (
//     <div>
//         <center>
//             <input type="text" onKeyUp={Handle} />
//             <p>{state}</p>
//         </center>
//     </div>
//   )
// }
// export default App



// import React, { useState } from "react";
// const SearchBox = () => {
//   const [search, setSearch] = useState("");
//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       alert(`Searching for: ${search}`);
//     }
//   };
//   return (
//     <div>
//       <h2>Search</h2>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         onKeyDown={handleKeyDown}
//         placeholder="Type and press Enter..."
//       />
//     </div>
//   );
// };
// export default SearchBox;







/**
 *          FORM EVENTS
 * 1.onChange => updates state whenever input values changes
 * 2.onInput => used for live search / similar to onChange
 * 3.onSubmit => used for form submission
 */

// // onChange => input, checkbox, select changes / updates state whenever the input value changes
// import React, {useState} from 'react'
// const App = () => {
//     const [state,setState] = useState("")
//   return (
//     <div>
//       <center>
//         <input type="text" 
//         placeholder='Enter your name....'
//         value={state}
//         onChange={(e)=> setState(e.target.value)}
//         />
//       </center>
//       <h2>Hello, {state}</h2>
//     </div>
//   )
// }
// export default App



// // onInput => similar to onChange / used for live search
// import React, { useState } from 'react'
// const App = () => {
//     const [state, setState] = useState("")
//     const Handle = (e) => {
//         setState(e.target.value)
//     }
//   return (
//     <div>
//       <center>
//         <input type="text" 
//         placeholder='Enter a char to Search' 
//         onInput={Handle}
//         />
//       </center>
//       <h4>Typed / searhed: {state}</h4>
//     </div>
//   )
// }
// export default App;



// // onSubmit => handles form submission with prevengtDefault()
// import React from 'react'
// const App = () => {
//     const Handle = (e, InputValue) => {
//         e.preventDefault();
//         alert('Form submitted')
//     }
//   return (
//     <div>
//       <center>
//         <form onSubmit={Handle}>
//             <input type="text" 
//             placeholder='Enter your Name.....'
//             required 
//             /> <br/><br/>
//             <button type='submit'>submit</button>
//         </form>
//       </center>
//     </div>
//   )
// }
// export default App


