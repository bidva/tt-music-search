import SpotifyWebApi from 'spotify-web-api-js';
var spotifyApi = new SpotifyWebApi({});

export const TOKEN = 'BQDs5vA_lmmQTEE0Klf1ikpkN4POof8-zqeRO9x3XTzIaGK0PAdPh9AwVgzi07ROkWvxqmgpfHJvp4QW9TOxrZqNqV7Xyclt5fsalCv-QqPW0v_munpO2EdEoZA_YAaklM7ehyeSKD-Fu-uILOCoPVsAodawGQDUxeqmdb5mNGWBrteZPLrd3uDLmSi3ho7rzKSrzz8shMNatd6__M7w4ogzDSPPNXl3YKyX3ywzZ5ItZD6_MOAeo2VS_8p87XgR4B8FlmALQFq_w2pV'
spotifyApi.setAccessToken(TOKEN)

export const getArtists = (term) =>{
	return spotifyApi.searchArtists(term)
}

export const getAlbums = (artistId) =>{
	return spotifyApi.getArtistAlbums(artistId)
}

export const getAlbum = (albumId) =>{
	return spotifyApi.getAlbum(albumId)
}