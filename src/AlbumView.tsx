import React, { Component } from 'react';
import { Album } from './core/MusicProvider';
import './AlbumView.css'

interface AppProps {
  album: Album
}

class AlbumView extends Component<AppProps> {
  private album: Album;

  constructor(props: AppProps) {
    super(props);
    this.album = props.album;
  }

  render() {
    return (
      <div className='Album'>
        <img src={this.album.imageUrl} alt={this.album.name}/>
        <h3 className='name'>{ this.album.name } <small><span className='artist'>({ this.album.artist })</span></small></h3>
        <a className='view' href={ this.album.viewUrl } target="_blank">View on Apple Music</a>
      </div>
    );
  }
}

export default AlbumView;
