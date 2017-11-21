import axios from 'axios';

export const TOKEN = 'BQDxhB07utWOPttQ9k7kBUkMrpPCqFPvp0wym2N5lT-pFWz7S6VGs-KIOxjVf3Vcsk26ZDKY0j2O-GQ5dE6YqvwPCY8BllsAI1dBQUtgFqou_-GTen_6ZCv1s9X1j6jyRgDADF1AMdbVFFQxBL5dBxRYHiTh1KDZtZlXjiVLvx29c1qJMOwBTSKCoI4xO192SFEP1OeSPZ30YESO-rdDwiFc5LVRmWowKK9kvi3NpI3MLjkZrkFpLbLzHvFk2IXfumO_du2HjOUNsTlW'

export const headersSetting = { 
	headers: { Authorization: `Bearer ${TOKEN}` }
}

export const getArtists = (term='ali') =>{
	const SEARCH_ARTISTS_URL = `https://api.spotify.com/v1/search?q=${term}&type=artist`
	return axios.get(
			SEARCH_ARTISTS_URL,
		 headersSetting)
	}