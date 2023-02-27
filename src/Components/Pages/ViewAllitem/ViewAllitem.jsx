import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPhotography } from '../../Redux/ProductData/action';
import "./ViewAllitem.css";

export const ViewAllitem = () => {
    const dispatch = useDispatch()
    const photo = useSelector((store) => store.AppReducer.photography)
    


    useEffect(() => {
        if(photo.length === 0){
          dispatch(getPhotography())
        }
    }, [dispatch, photo.length])

    console.log(photo)

  return (
    <div className='photocategory'>
        <h3 className='category_name'>Photography</h3>
        <hr></hr>
          {/* <p>Photography is the art of pausing special moment & turning them in to an everlasting ticket to past. My Ginee understands that your precious occasions deserve not just to be photographed; but to be captured & preserved with love & emotions. We offer a dedicated team of professionals who understand the value of a moment & undertake to convert it into a pleasant memory.
</p> */}
        <div className='AllCategoryItem'>
        {
          photo.length > 0 && photo.map((item) => {
            return (
            <div key={item.id}>
            <div>
                <img src={item.image} alt='' />
            </div>
            <div style={{padding:"10px"}}>
                <div><p>{item.title}</p></div>
                <div><h6>₹ {item.value}</h6></div>
                {/* <div dangerouslySetInnerHTML={{__html: item.details}}></div> */}
                <p>⭐ 4.1 (11k)</p>
                <p >🛄 241 Bookings this month in Bhopal</p>
            </div>
              {/* <button><Link target={'_blank'} to={`/photography/${item.id}`}>{(!item.value)? "Show More" : "Book Now"}</Link></button> */}

               {/* <button>if(!item.value){
                   ({<Link target={'_blank'} to={`/photography/${item.id}`}>Show More</Link>})
              }else if((item.title==="Birthday Shoot")){
                 ({<Link target={'_blank'} to={`/photography/${birthday}}`}>Show More</Link>})
              }else{
                 ({<Link>Book Now</Link>})
              }  </button> */}
              
              <button>{switch(value){
                case (item.value):
                   return {"Book Now"}
                case (!item.value):
                   return ({<Link target={'_blank'} to={`/photography/${item.id}`}>Show More</Link>})
                case (!item.value && !item.price):
                   return ({<Link target={'_blank'} to={`/photography/birthday`}>Show More</Link>})
               }
              
              }</button>
            </div>
          )})
        }
        </div>
    </div>
  )
}
