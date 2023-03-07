//Form :  https://tachyons.io/components/forms/sign-in/index.html
import React, {Component} from 'react';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            name: '',

        }
    }

    onNameChange = (event) => {
        this.setState({name : event.target.value})
    }

    onEmailChange = (event) =>{
        this.setState({email : event.target.value})
    } 

    onPasswordChange = (event) =>{
        this.setState({password: event.target.value})
    }

    onSubmitRegister = () =>{
        // console.log('this.state: ', this.state);
        //fetch by default does a get request, but in here we want to do a post request.
        //the way we do post request is in the second parameter, we can pass an object that describes what the request will be.
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user); //Loading the user
                this.props.onRouteChange('home');//And changing the route.
            }
        })
        .catch(err => console.error('Error fetching data:', err));
    }


    render(){
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                                <input 
                                onChange = {this.onNameChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                <input 
                                onChange = {this.onEmailChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                <input
                                onChange = {this.onPasswordChange}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick = {this.onSubmitRegister} 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
                            type="submit" 
                            value="Register"/>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Register;