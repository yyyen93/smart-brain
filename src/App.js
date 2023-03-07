import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ParticlesBg from 'particles-bg';


// Initial state
const initialState={
  input:'',
  imageUrl:'',
  box:'',   
  /**
   * - box will contain the values we receive.
   * - Pass 'box' state into your 'faceRecognition' component
   */
  route:'signin',
  isSignedIn:false,
  user: {
    id: '', 
    name:'',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component{
  constructor(){
    super();
    this.state= initialState
  };

  
  loadUser = (data) => {
    this.setState({user: {
      id: data.id, 
      name:data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }



  // This function will take in the 'bounding box' and then return an object with the values that we need.
  calculateFaceLocation = (data) => {
    /**
     * -This data will be transfer to the response. One bounding box around a face
     * -response.outputs[0].data.regions[0].region_info.bounding_box
     * -So we want to change this 'response' to 'data' and we can just have a constant called clarifaiFace
     * */ 
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    //Do the DOM manipulation
    const image = document.getElementById('inputimage');
    /**
      we can create an id called 'inputimage'. This inputimage that we're grabbing will be the 'FaceRecognition' component img tag. So that image that gets displayed in our app. So now this 'inputimage' is grabbed and we want to, as you remember the bounding box is a percentange of the image. So if it's .22 that means it's at 20 percent of whatever the height or width of the images. In our case, we can say that we for sure wnt to have the width of our image by saying 'image.width'
    */
    const width = Number(image.width); 
    /**
      Because this is going to be a string and we want to do some calculations on it, we'll wrap it in Number. This way we make sure that it is a number, and then we'll do 'height' as well of the image.
     */
    const height = Number(image.height);
    console.log('Width: '+width);
    console.log('Height: '+height);
    /**
      As you know this width is 500 because in FaceRecognition.js, we have width 500px. The reason that dont do 500 but do Number(image.width) is because if somebody comes along decides to change it, it won't get affected in the FaceRecognition.js img width.
     */
    return {
      /**
       * -Return an object with everything to fill up the 'box' state.
       * -The object will need to figure out the first,second,third and fourth dot around the face and wrap it all together.
       */
      leftCol: clarifaiFace.left_col * width, //left_col is the percentage of the width. So if we multiply by the 'width', that we have here, which is 500, we'll get the actual pixel value of the left column.
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),//Because the right column is on right side, we want to get the number which is the total percentage minus the width starting frm the left hand side.
      bottomRow: height - (clarifaiFace.bottom_row * height)
      //So now we have these values, we want to fill up the 'box' state. So i can create a function or method on this class that say 'displayFacebox'.
      //This return object is needed by the displayFacebox function.
      //Add some CSS, so that these col row numbers appear on the face. It should correspond with the width.
    }
  }

  displayFacebox = (box) =>{
    console.log(box);// box object
    /**
     * - This is going to receive return value.
     * - And it's going to say 'this.setState({box:box});
     * - In ES6, can do like this.setState({box})
     */
    this.setState({box:box});
  }

  //This two is a function that will be passed as a prop to 'ImageLinkForm'
  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({input: event.target.value});
  };

  onPictureSubmit = () => {
    this.setState({imageUrl: this.state.input});
    //fetch handleApiCall / imageurl
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response){
        fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id  
              // We will just send 'id', which we have of the user when they sign in.
            })
        })
        .then(response => response.json())
        .then(count =>{
          this.setState(Object.assign(this.state.user, {entries:count}))
          // Object.assign allow you to target object.
        })
        .catch(console.log)
      }

      //This 'response' will be received from response.outputs[0].data.regions[0].region_info.bounding_box
      this.displayFacebox(this.calculateFaceLocation(response));
      /**
       *  - This will get a 'response' which is boundingbox
       *  - Whatever this returns. This is the displayFacebox = (box) =>{}, the 'box' parameter.
       */

    })
    .catch(err => console.log('Clarifai API fails :  ',err))
  };

  //If the user sign in, we want to direct them to the homepage.
  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState(initialState)
    }else if(route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route: route});
    // Instead of statically entring 'home' to 'onRouteChange', we need to dynamically say that our route is going to be where we give it. 
  }

  render(){
    // Destructure 
    const { isSignedIn , imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} className="particles" /> {/*https://www.npmjs.com/package/particles-bg  */}

        {/* Components */}
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {
          route === 'home' 
          ?  <div>
              <Logo /> 
              <Rank name={this.state.user.name} entries={this.state.user.entries}  /> {/*  pass user.name and user.entries into the Rank component as props. Rank with the states of the user */}
              <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit} />
              <FaceRecognition box={box} imageUrl={imageUrl}/>{/* Pass 'box state' here */}
            </div>
          : (
              route === 'signin' 
              ? <SignIn loadUser={this.loadUser} onRouteChange = {this.onRouteChange} /> // pass the loadUser to the Signin component as a prop. Passing the loadUser method to Signin
              : <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange} /> 
            )
        }
      </div>
    );
  };
}
export default App;

