import React from 'react';
import "./DetailedItem.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getBirthday, getPhotography } from '../../Redux/ProductData/action';

export const DetailedItem = () => {
  const {id} = useParams()
  const photography = useSelector(store => store.AppReducer.photography)
  // store.AppReducer.photography
  const [detail, setDetail] = useState({})
  const dispatch = useDispatch()
    
  // console.log(photography)
    
   useEffect(()=> {
     if(photography.length === 0){
       dispatch(getPhotography())
      
         }
    
       }, [photography, dispatch])
      
      useEffect(() => {
          if(id){
            const photo = photography.filter((item) => ( Number(id) === item.id))
            console.log(photo)
            photo && setDetail(photo)
          
          }

   }, [id, photography])

   console.log(detail)

  return (
    <div className='detailpage'>
        
        <h1>Service id:{id}</h1>
        {
                
                  detail.length>0 && detail.map((el) => {
                  return (
                    <div key={el.id}>
                      <img src={el.image} width={200} height={200} />
                      <h4>{el.title}</h4>
                      <span className='service_des'>Service Description:</span>
                      <p className='description'  dangerouslySetInnerHTML={{__html: el.details}}></p>
                      <div className='button'>
                        <button>{(!el.value)?"Show More":"Book Now"}</button>
                        <button>Add To Cart</button>
                      </div>
                
                  {/* varient price */}
                 <div className='varient-price'>
                  {(!el.value) && el.price.map((price)=> {
                      return (
                          <div key={price.id}>
                            <div style={{display:"flex"}}> 
                             <img width={100} height={80} padding="20px" margin="0px 5px 0px 0px" src="https://media.myginee.com/media/service/items/images/images__8_-removebg-preview.png" />
                                <div style={{marginLeft:"5px"}}>
                                <p>{price.statement}</p>
                                <h6>₹ {price.price}</h6>
                                </div>
                             </div>
                            <div>
                              <button>Book Now</button>
                              <button>Add To Cart</button>
                            </div>
                          </div>
                      )
                  })}
                 </div>
              </div>
            )
          })
        }  
        
    </div>
  )
}
