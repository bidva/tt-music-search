import axios from 'axios';

export const TOKEN = 'BQBaNcJ6GJok3U7wnXFqYUpuC_VvrQG3iXkEseLE3F_nKCxYYqYvowY89eFzz3x5_quKCz8M3q4NwXURrJAx8AgtNx0kydtP8jg6HMvhlvccysTNchXlJePjMUcSyPRSPnkhW1Hkp6SewsiwafLUWJWX50scPoNTm7eXptez5A7Kn9KAKSVVmpvEdSx7TxWca-u5KhAIwiADZsXWf6ScUq_JTk4dAISo2RW2tUoV1g50rxwX4cFmbjRA8yv339RjM1l1L1u9uOYoSHr_'

export const headersSetting = { 
	headers: { Authorization: `Bearer ${TOKEN}` }
}

export const getArtists = (term='ali') =>{
	const SEARCH_ARTISTS_URL = `https://api.spotify.com/v1/search?q=${term}&type=artist`
	return axios.get(
			SEARCH_ARTISTS_URL,
		 headersSetting)
	}