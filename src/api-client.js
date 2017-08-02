const url = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=f877947903a4ad5c8edb111057007769&format=json';

const api = {
  async getArtists() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const albums = await data.topalbums.album;
      return albums.map(album => (
        {
          name: album.name,
          artist: album.artist.name,
          headerImage: album.image[0]['#text'],
          bodyImage: album.image[3]['#text'],
          likes: '100',
          comments: '100',
        }
      ));
    } catch (e) {
      console.warn('error', e);
      return e;
    }
  },
};

export default api;
