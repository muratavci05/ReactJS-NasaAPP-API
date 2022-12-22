import React from "react";
import FooterLogo from  "../assets/shared/log.svg";

const Footer =()=>{
    return(
        <React.Fragment>
            <div>
                <div>
                    <div >
                        <div>
                        <img src={FooterLogo} />
                        </div>
                        <div>
                            <p style={{display:"flex",justifyContent:"center",color:"burlywood"}}>For Space Enthusiasts</p>
                        </div>
                        <p style={{color:"grey",display:"flex",justifyContent:"center"}}>Murat AVCI <span style={{color:"white"}}>&nbsp;<span> | </span>&nbsp;   </span> <p style={{color:"gray"}}>React Frontend Developer</p></p>
                        
                    </div>
                </div>
                <br/>
            </div>
        </React.Fragment>
    )
    
}

export default Footer;