import React from 'react';
import "./IndivisualCard.css";

export const IndivisualCard = ({id, title, slug,image, value}) => {
  return (
    <div className='single_card'>
       <img src={image} alt={slug}  />
       <p className='title'>{title}</p>
       <p>₹ {value}</p>
       <p>⭐ 4.1 (11k)</p>
       <p >🛄 241 Bookings this month in Bhopal</p>
         
       
    </div>
  )
}
