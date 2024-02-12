import React from "react";
import './App.css'
// import MovieCard from "./MovieCard.jsx";
import MyImageComponent from "./MyGalleryComponent.jsx";

export default function App () {
  return (
    <div>
      <MyImageComponent
        title="Puppy"
        imageUrl="https://images.unsplash.com/25/puppy-love.jpg?q=80&w=969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="Puppy"
      />
      <MyImageComponent
        title="Dragon ball"
        imageUrl="./pics/Dragon ball.jpeg"
        altText="Dragon ball"
      />
        <MyImageComponent
        title="trees"
        imageUrl="./pics/trees-2.jpg"
        altText="trees"
      />
    </div>
  )
}







// export default function App () {
//   return (
//             <div>
//                 <h1>Hello</h1>
//                 <MovieCard 
//                   title='Naruto'
//                   duration='25:04'
//                   uploadDate='25/02/22'
//                 />
//             </div>
//           )
// }
