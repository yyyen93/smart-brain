import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={()=>onRouteChange('signout')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
            </nav>
        )
    }else{
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={()=>onRouteChange('signin')} className="f3 link dim black pa3 pointer">Sign In</p>
                <p onClick={()=>onRouteChange('register')} className="f3 link dim black pa3 pointer">Register</p>
            </nav>
        )
    }
}
export default Navigation;

/**

    size: f3
    link: Its going to be link
    dim : Its going 'dim' when i click on it will be black
    black: Its going to be black
    underline: Its going to be underline
    pa3 : padding 3
    pointer : pointer when we hover over.
 */