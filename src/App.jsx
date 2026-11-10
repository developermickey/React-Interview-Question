
// import { useState } from "react";

// const arr = ["Play Cricket", "Play Video", "Read Book"];

// const App = () => {
//   const [list, setList] = useState(arr);
//   const [checkedItems, setCheckedItems] = useState([]);

//   const handleCheckbox = (index) => {
//     setCheckedItems((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   const handleDelete = (index) => {
//     setList((prev) => prev.filter((_, i) => i !== index));

//     setCheckedItems((prev) =>
//       prev
//         .filter((i) => i !== index)
//         .map((i) => (i > index ? i - 1 : i))
//     );
//   };

//   return (
//     <ul className="w-full min-h-screen flex flex-col items-center justify-center gap-2">
//       {list.map((item, index) => (
//         <li className="mb-2 text-2xl flex items-center gap-3" key={index}>
//           <input
//             type="checkbox"
//             checked={checkedItems.includes(index)}
//             onChange={() => handleCheckbox(index)}
//           />

//           <span>{item}</span>

//           {checkedItems.includes(index) && (
//             <button
//               onClick={() => handleDelete(index)}
//               className="px-4 py-2 bg-red-500 text-white rounded-md"
//             >
//               Delete
//             </button>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default App;



import React from 'react'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App