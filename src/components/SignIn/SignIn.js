//Form :  https://tachyons.io/components/forms/sign-in/index.html
import React, {Component} from 'react';
import './SignIn.css';

class Signin extends Component{
    constructor(){
        super();
        this.state = {
            signInEmail:'',
            signInPassword:''
        }
    }

    onEmailChange = (event) =>{
        this.setState({signInEmail : event.target.value})
    } 

    onPasswordChange = (event) =>{
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () =>{
        // console.log('this.state: ', this.state);
        //fetch by default does a get request, but in here we want to do a post request.
        //the way we do post request is in the second parameter, we can pass an object that describes what the request will be.
        fetch('https://smartbrain-api-z43g.onrender.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
                // Q: Instead of checking if onSubmitSignIn was successful, check the response to see if user.id exists and call two functions if a user is returned from the backend: loadUser(user) and onRouteChange('home')
        })
    
    }

    render(){
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                            <input
                            onChange={this.onEmailChange} 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address" 
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                            <input 
                            onChange={this.onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password"
                            name="password"  
                            id="password" 
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Sign in"/>
                        {/* So let's go to 'SignIn.js' and say that 'onRouteChange' 'home' |  onClick={onRouteChange('home')} function. Now, we don't want to actually run this function. The way we have it now is that, we're going to run this function when it gets rendered. But that's not what we want, we want it to run whatever 'onClick' happens and then 'onClick' will call this function. So the way we do that is we can do an arrow function and this arrow functil will just have 'onRouteChange'. So it's just a function that's going to get called. */}
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={()=>this.props.onRouteChange('register')} className="f5 link dim black db pointer">Register</p>
                    </div>
                </div>
            </main>
        </article>
        )
    }
}


export default Signin;