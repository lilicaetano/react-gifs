import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'zVP9ZdSQltv617nuDL8NkPMt6B2SfWTr';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "X8bKCalHrs7lTKqttE",
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      rating: 'g',
      limit: 30
    }, (_, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { selectedGifId, gifs } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
