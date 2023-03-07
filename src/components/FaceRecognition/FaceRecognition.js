import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({box,imageUrl}) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" src={imageUrl} alt="" width='500px' height='auto'/>
                <div className="bounding-box" style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
                {/*  
                - We now have new 'box' prop, this prop can use to create a new 'div'. This div is going to be completely empty. Because we are not displaying anything other than a border around this 'div'
                -Im going to copy what 'clarifai' has and calling 'bounding box' class.
                -add style to col and row
                 */}
            </div>
        </div>
    )
}
export default FaceRecognition;