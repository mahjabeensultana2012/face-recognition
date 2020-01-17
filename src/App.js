import React from 'react';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
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
    };
  }

  handleChange = event => {
    console.log(event.target.value);
  };

  handleSubmit = () => {
    console.log('click');
    app.models
      .predict(
        'a403429f2ddf4b49b307e318f00e528b',
        'https://samples.clarifai.com/face-det.jpg'
      )
      .then(
        function(response) {
          // do something with response
          console.log(response);
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
        {/*<FaceRecogition />*/}
      </div>
    );
  }
}

export default App;
