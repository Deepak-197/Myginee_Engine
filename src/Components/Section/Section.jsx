import React, { useState } from 'react';
import "./Section.css";


export const Section = () => {
    const [section, setSection] = useState(["Home", "Services", "About Us", "Contacts", "Deals"])

  return (
    <div className='section'>
        <div className='section_child'>
            {section.map((el) => (
                <div className='section_div' style={{color: "#be1516"}}><p>{el}</p></div>
            )

                
                
            )}
        </div>
    </div>
  )
}
