import React from 'react';
import "./SingleService.css";

export const SingleService = ({id, title, slug, mini_image}) => {
  return (
    <div className='single_service'>
       <img src={mini_image} alt={title}  />
       <div><p>{title}</p></div>
    </div>
  )
}
