import React from 'react';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
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
    };
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log('click');
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
        //'https://samples.clarifai.com/face-det.jpg'
      )
      .then(
        function(response) {
          // do something with response
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          );
        },
        function(err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <FaceRecogition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
