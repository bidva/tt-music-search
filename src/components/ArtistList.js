import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchArtists} from '../reducers/artist'

const ArtistItem = ({id,name,images})=>(	
			<div>
				<img src="https://www.mathworks.com/content/mathworks/www/en/solutions/verification-validation/jcr:content/svg.adapt.full.high.svg/1507664300553.svg"/>
				<span>{name}</span>
			</div>
	)

 class ArtistList extends Component {
 	componentWillReceiveProps(nextProps) {
 		nextProps.fetchArtists(nextProps.searchTerm)
 	}
	render() {
		return (
			 <div className="Artist-List-container">
          {this.props.artists.map(artist=><ArtistItem key={artist.id} {...artist}/>)}
       </div>
		);
	}
}

export default connect(
	(state)=>({artists:state.artists,searchTerm:state.searchTerm}),
	{fetchArtists}
	)(ArtistList)