import React, { useEffect, useState } from 'react';
import "./Services.css";
import axios from 'axios';
import { SingleService } from './SingleService';

const getServices = () => {
   return axios.get("https://apis.myginee.com/v1/service/bhopal")
    
}
export const Services = () => {
      const [services, setServices] = useState([])

      useEffect(() => {
        getServices()
        .then((res)=> setServices(res.data))
        .catch((err) => console.log("Error", err))
      }, [])

      console.log("Services data", services)

  return (
    <div className='services'>
      <h1>Explorer Our Services</h1>
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
