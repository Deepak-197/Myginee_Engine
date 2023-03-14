import React from 'react';
import { Link } from 'react-router-dom';
import "./SingleService.css";

export const SingleService = ({id, title, slug, mini_image}) => {
  return (
    <div className='single_service' key={id} >
      <Link to={`/service/${id}`}>
       <img src={mini_image} alt={title}  />
      </Link>
       <div><p>{title}</p></div>
    </div>
  )
}
