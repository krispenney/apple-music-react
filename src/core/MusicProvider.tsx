export interface Album {
  artist: string,
  name: string,
  imageUrl: string,
  viewUrl: string
}

class MusicProvider {
  private endpoint = new URL('https://itunes.apple.com');

  search(term: string): Promise<Album[]> {
    let params =  new URLSearchParams([
      ['term', term],
      ['media', 'music'],
      ['entity', 'album']
    ]);

    let search_endpoint = new URL('/search', this.endpoint);
    search_endpoint.search = params.toString();

    return fetch(search_endpoint.toString()).then(response => response.json())
    .then(data => data.results.map((album: any) => {
      return {
        name: (album.collectionName as string),
        artist: (album.artistName as string),
        imageUrl: (album.artworkUrl100 as string),
        viewUrl: (album.collectionViewUrl as string)
      } as Album;
    }));
  }
}

export default MusicProvider;
