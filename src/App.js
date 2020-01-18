import React from 'react';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecogition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';

import './App.css';

const app = new Clarifai.App({
  apiKey: 'd924602a97ab43fd91585703f5cdd881',
});

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    move: {
      enable: true,
      speed: 6,
      attract: {
        rotateX: 600,
        rotateY: 1200,
      },
    },
    Interactivity: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
    };
  }

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    //console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = box => {
    console.log(box);
    this.setState({ box: box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    //console.log('click');
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      //'https://samples.clarifai.com/face-det.jpg'

      .then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch(err => console.log(err));

    // console.log(
    //   response.outputs[0].data.regions[0].region_info.bounding_box
    // );
  };

  onRouteChange = () => {
    this.setState({ route: 'home' });
  };

  render() {
    const { imageUrl, box } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />

        <Navigation />
        {this.state.route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecogition imageUrl={imageUrl} box={box} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
