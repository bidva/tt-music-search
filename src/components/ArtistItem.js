import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {GridTile} from 'material-ui/GridList'

class ArtistItem extends Component {
	render() {
	const {id,name,images} = this.props
		return (
				<Link to={`/artists/${id}/${name}`}>
					<GridTile key={id} title={name}>
	      		<img 
	      		src={images[2]?images[2].url:'http://www.pngmart.com/files/5/Anonymous-Transparent-Background.png'} 
	      		alt="Artist thumb"
	      		/>
    			</GridTile>
				</Link>
			)
	}
}
export default ArtistItem
