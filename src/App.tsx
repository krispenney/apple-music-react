import React, { Component } from 'react';
import './App.css';
import MusicProvider, { Album } from './core/MusicProvider';

import AlbumView from './AlbumView';

interface AppProps {
  musicInstance: MusicProvider,
  color: String
}

interface AppState {
  loading: boolean,
  albums: Album[]
}

class App extends Component<AppProps, AppState> {
  private musicInstance: MusicProvider;

  state = {
    loading: false,
    albums: [] as Album[]
  }

  constructor(props: AppProps) {
    super(props);
    this.musicInstance = props.musicInstance;
  }

  componentDidMount() {
    this.musicInstance.search('radiohead').then((albums: Album[]) => {
      this.setState({
        loading: false,
        albums: albums
      });
    });
  }

  render() {
    const { albums, loading } = this.state;

    return (
      <div className="App">
        { loading && <h1>loading...</h1>}
        <div className="AlbumContainer">
          { !loading && albums.map(album => (
            <AlbumView album={album} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
