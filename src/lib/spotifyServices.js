import SpotifyWebApi from 'spotify-web-api-js';
var spotifyApi = new SpotifyWebApi({});

export const TOKEN = 'BQCl186MLxTe_4se-a7DOBEoYWfoqkRJEVmDzVzoXtV31_NFJIhh1stpophR95-PoDIibQ-hEYBrMgL-VTVdKKJI2U2vrTeM_k9wYU8R0_mHr7tVIS5CTLO_lz6ACcyWzSLO0sGpEVD8OFaZmdZ70nNbq8RnsH3lRCWdNqFRxC3_6W0umRNfk8MOJLCpakfiVQDhlmEjxOFmiiC_6PXfdTByOwWft_uS3Bf-MDoegluvHn3nNE4oUizsr3HgrvLXdEE9SpGkIZgky2OT'
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