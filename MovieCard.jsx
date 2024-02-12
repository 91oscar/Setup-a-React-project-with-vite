import React from "react";

const MovieCard = ({title, duration, uploadDate}) => {
  return (
        <div>
            <h3>{title}</h3>
            <div>
                <span>{duration}</span>
                <span>{uploadDate}</span>
            </div>
        </div>
    )
  }
  

  export default MovieCard