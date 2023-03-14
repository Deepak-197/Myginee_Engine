import React, { useEffect } from 'react';
import "./Services.css";
import { SingleService } from './SingleService';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../Redux/ProductData/action';

// const getServices = () => {
//    return axios.get("https://apis.myginee.com/v1/service/bhopal")
    
// }
export const Services = () => {
      // const [services, setServices] = useState([])
      const dispatch = useDispatch()
      const services = useSelector((store) => store.AppReducer.services)

      useEffect(() => {
        if(services.length === 0){
          dispatch(getServices())
        }
      }, [dispatch, services])

      console.log("Services data", services)

  return (
    <div className='services'>
      <h2>Explorer Our Services</h2>
        <p>All Home & Corporate Services At One Place</p>
      <div className='services_child'>
        {
            services.length > 0 && services.map((data) => {
                return (
                    <SingleService key={data.id}  {...data} />
                    
                )
            })
        }
      </div>
    </div>
  )
}
