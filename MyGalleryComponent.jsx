import React from "react";

export const MyImageComponent = ({title, imageUrl, altText}) => {
    return (
      <>
        <section>
          <h3>{title}</h3>
          <img src={imageUrl} alt={altText}/>
        </section>
      </>
    )
  }


  export default MyImageComponent