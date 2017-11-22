import * as SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export const TOKEN = 'BQAebiZhKs0n3rrkIDHuWvV4VvvgyDi5dJvVF0eTYISLVVD6_kzsmSLRlRQUWvNd5TZCrEw4L53iyV55lzYPUIXdui-kB3KwuQF0T1LOQ7ho2cf-WgmOKVrYW56xI-r6CBrimLoT7snizwF01yZjziboaFa19GcrJWIqBEYo4r-FnTYK-Lj_geua7YZPpVPf8KnBQgQ0lrjIS4rzplMahUvjuMiRJ5P4dLs9HXvQm3mX7G7uVABP3vCWzbvrk9-8i4hb-loY-wVkyYYu'
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