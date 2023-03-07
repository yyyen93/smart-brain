import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css'
import brain from './brain.png';



const Logo = () =>{
    return(
        <div className="ma4 mt0">
            {/* 
                ma4 : margin 4
                mt0 : margin top 0

                br2 : border radius 2
                shadow-2 : shadow 2

                pa3 : padding 3
            */}
            
            {/* https://github.com/mkosir/react-parallax-tilt */}
            <Tilt className="Tilt br2 shadow-2" style={{ height: '150px', width: '150px'}}  glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
                <div className="pa3">
                    <img alt="logo" src={brain} style={{paddingTop:'5px'}}/>
                </div>
            </Tilt>  
        </div>
    )
}
export default Logo;

/**
 * What is this?
 * glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all
 * 
 * Answer:
 * https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--glare-effect-360
 */