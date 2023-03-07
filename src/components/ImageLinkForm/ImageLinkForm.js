import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
    return(
        <div>
            {/* 
                f3 : size of 3
                
                f4 : size of 4
                pa2 : padding of 2
                w-70 : width of 70%
                center : center the input

                w-30 : width of 30%
                grow : grow the button when hover
                f4 : size of 4
                link : Its a link
                ph3 : padding horizontal of 3
                pv2 : padding vertical of 2
                dib : display inline block
                white : white color
                bg-light-purple : background color light purple

                pa4 : padding of 4
                br3 : border radius of 3
                shadow-5 : shadow of 5

            */}
            <p className="f3 black">
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" className="f4 pa2 w-70 center" onChange={onInputChange}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onPictureSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;