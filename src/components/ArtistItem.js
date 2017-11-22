import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {GridTile} from 'material-ui/GridList'

class ArtistList extends Component {
	render() {
	const {id,name,images} = this.props
		return (
				<Link to={`/artists/${id}`}>
			<GridTile key={id} title={name}>
	      	<img src={images[3]?images[2].url:'http://www.pngmart.com/files/5/Anonymous-Transparent-Background.png'} />
    	</GridTile>
				</Link>
			)
	}
}
export default ArtistList
