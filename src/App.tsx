// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useEffect, useState } from "react";
// import "./App.css";

// const Card = ({ title }: { title: string }) => {
//   const [hasliked, setHasLiked] = useState(false);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(
//       `The card "${title}" has been ${hasliked ? "liked" : "unliked"}.`
//     );
//   }, [hasliked]);

//   return (
//     <div className="card" onClick={() => setCount(count + 1)}>
//       <h2>
//         {title} <br /> {count || null}
//       </h2>
//       <button
//         onClick={() => {
//           setHasLiked(!hasliked);
//         }}
//       >
//         {hasliked ? "Liked" : "Like"}
//       </button>
//     </div>
//   );
// };
// const App = () => {
//   return (
//     <div className="card-container">
//       <Card title="Harry Potter" />
//       <Card title="Lord of The Rings" />
//       <Card title="Game of Thrones" />
//     </div>
//   );
// };

// export default App;

const App = () => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default App;
