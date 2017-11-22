import * as SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export const TOKEN = 'BQAehhYpecvjiyNHDEO4UwfbIDjj86brp36bdMqw-4ZdjrLKeDr4rGWLwUyugiH-cZ0CCN9RXNAZosoRGJNPIO-WsrlTnjth_UYwZ9SenkhawflxYURpaIbWAS9-DbVF-WPwHdkQcT4Y4e5SSCm1jcU7XuImQ9Z4ZvUdY91fPVkZWFHURj-irIJMJbrX_2iX-Zck53FuM10rn4IaHvc_EnGHWJlxCZ3-2TM3OrUcuqGM-y1TQi588FD7kqO4EX9VHcHe4weKzjLuCpnG'
spotifyApi.setAccessToken(TOKEN)

export const getArtists = (term) =>{
	return spotifyApi.searchArtists(term)
	}

export const getAlbums = (artistId) =>{
	return spotifyApi.getArtistAlbums(artistId)
	}