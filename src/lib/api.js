import SpotifyWebApi from 'spotify-web-api-js';
var spotifyApi = new SpotifyWebApi({});

export const TOKEN = 'BQCzBvv7Xa9EcWeVv0hF_EX6sROw5xkMpkbXv0wsQe8FynTYsiEDgL__1OOzgCxMGFrbQilbX6ML0FtzrSIRtVNkzhBlW3zC02frUSao-YjnfqiEBhD_h9tjhGQ34WN2DigKw96Sm1wa6SAuQNsgeEM07_tD0lTT3wXH27Ll_AKElBr8EUQ-nj9eQXDvFAzQtwnkuAvwH_jUxAWkXeP5bFI8NsAkS-NQPEzzPxJ4XlyekfhgFgpCtg3NEFLKwVWMjtGSI_ykO9-KVixA'
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