import React from 'react'
import "./Header.css";

export const Header = () => {
  return (
    <div className='Header'>
        <div className='header1' style={{ color:"white", fontSize:"16px"}}>
            <p>Toll-Free: 1800-571-1122</p>
        </div>

        
            <div id="nav-up-right">
             <div id="nav-settings">
              <div id="save-app">
                  <div style={{ display: "flex"}}>
                    <img src="https://pixsector.com/cache/753f2096/avb4326d4ac628bc1c307.png" />
                    <p style={{color:"white", fontSize:"16px", padding:"4px", marginTop:"35px"}}>Save $3 with App</p>
                  </div>
                <div className="dropdown" id="save-App">
                  <h4 style={{ textAlign: "left", margin: "25px 0 -10px 20px" }}>
                    Download App!
                  </h4>
                  <p style={{ textAlign: "left", marginLeft: "20px" }}>
                    Save $3 with App & New User Only
                  </p>
                  <div style={{ display: "flex" }}>
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        marginLeft: "20px"
                      }}
                      src="https://images.all-free-download.com/images/graphiclarge/qr_code_198897.jpg"
                      alt=""
                    />
                    <div id="download">
                      <img
                        style={{
                          width: "125px",
                          height: "45px",
                          marginLeft: "5px"
                        }}
                        src="https://www.pikpng.com/pngl/m/506-5064409_apple-ios-download-on-apple-store-clipart.png"
                        alt=""
                      />
                      <img
                        style={{
                          width: "120px",
                          height: "40px",
                          marginLeft: "5px"
                        }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
    </div>
  )
}
