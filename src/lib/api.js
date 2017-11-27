import SpotifyWebApi from 'spotify-web-api-js';
var spotifyApi = new SpotifyWebApi({});

export const TOKEN = process.env.REACT_APP_TOKEN
spotifyApi.setAccessToken(TOKEN)

export const getArtists = (term) =>{
  return spotifyApi.searchArtists(term)
}

export const getArtist = (artistId) =>{
  return spotifyApi.getArtist(artistId)
}

export const getAlbums = (artistId) =>{
  return spotifyApi.getArtistAlbums(artistId)
}

export const getAlbum = (albumId) =>{
  return spotifyApi.getAlbum(albumId)
}