import React, { Component } from 'react';
import {GridTile} from 'material-ui/GridList'
import {connect} from 'react-redux'
import Stars from 'react-star-rating-component'

const styles = {
    gridItem: {
      height: 'auto'
    }
  }
class AlbumItem extends Component {

	getIntValueForStars(value){
		let convertedValue = (value*5)/100
		return Math.ceil(convertedValue)
	}
	
	renderdetails(album){
		if (!album.tracks)
			return null
		return(
				<div className="Album-Detail-Container">
					 <Stars
              name={'stars'+album.id}
              editing={false}
              starCount={5}
              value={this.getIntValueForStars(album.popularity)}
              />
              <span>{new Date(album.release_date).getFullYear()}</span>
					<ol>
						{album.tracks.items.map((track)=><li key={track.id}>{track.name}</li>)}
					</ol>
				</div>
			)
	}
	render() {
	const {id,name,images,selected} = this.props
		return (
					<GridTile onClick={this.props.handleClick.bind(this, id)} style={styles.gridItem} key={id} title={name}>
	      		<img 
	      		src={images[1]?images[1].url:'http://www.pngmart.com/files/5/Anonymous-Transparent-Background.png'} 
	      		alt="Artist thumb"
	      		/>
	      		{selected?this.renderdetails(this.props.selectedAlbum):null}
    			</GridTile>
			)
	}
}
export default connect(
  (state)=>({selectedAlbum:state.selectedAlbum})
  )(AlbumItem)
