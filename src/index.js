import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
  state = {
    lat: null,
    error: null,
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => this.setState({ error: error.message })
    );
  }

  renderContent() {
    if (!this.state.error && !this.state.lat) {
      return <Loader text='Please accept location request' />;
    }

    if (this.state.error) {
      return <div>Sorry, there was an error.</div>;
    }

    return <SeasonDisplay lat={this.state.lat} />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
