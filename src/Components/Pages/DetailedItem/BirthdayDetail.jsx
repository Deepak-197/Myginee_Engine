import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBirthday } from '../../Redux/ProductData/action';
import "./BirthdayDetail.css";

export const BirthdayDetail = () => {
    const dispatch = useDispatch();
    const birthday = useSelector((store) => store.AppReducer.photography)

    console.log(birthday)

    useEffect(()=>{
      if(birthday.length === 0)
      dispatch(getBirthday())
    }, [dispatch, birthday])

  return (
    <div className='Birthday-Shoot'>
     <div>
      <h3>Birthday Shoot</h3>
      <hr></hr>

      <div className='Birthday'>
        {birthday.length > 0 && birthday.map((el) => {
            return (
              <div >
              <div key={el.id}>
                <div>
                   <img src={el.image} alt='' />
                </div>
                <div>
                  <div><p>{el.title}</p></div>
                  <div><h6>₹ {el.value}</h6></div>
                  <p>⭐ 4.1 (11k)</p>
                  <p >🛄 241 Bookings this month in Bhopal</p>
                </div>
                 <button><Link target={'_blank'} to={`/photography/${el.id}`}>{(!el.value)? "Show More" : "Book Now"}</Link></button>
              </div> 
                 
                 
              </div>
            )
        })}
      </div>
     </div>
    </div>
  )
}
