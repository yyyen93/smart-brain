// https://tachyons.io/components/forms/sign-in/index.html
import React from 'react';


const Register = ({onRouteChange}) => {
    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={()=>onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Register"/>
                        {/* So let's go to 'SignIn.js' and say that 'onRouteChange' 'home' |  onClick={onRouteChange('home')} function. Now, we don't want to actually run this function. The way we have it now is that, we're going to run this function when it gets rendered. But that's not what we want, we want it to run whatever 'onClick' happens and then 'onClick' will call this function. So the way we do that is we can do an arrow function and this arrow functil will just have 'onRouteChange'. So it's just a function that's going to get called. */}
                    </div>
                </div>
            </main>
        </article>
    )
}
export default Register;