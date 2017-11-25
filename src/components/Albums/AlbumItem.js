import React, { Component } from 'react'
import {GridTile} from 'material-ui/GridList'
import Stars from 'react-star-rating-component'

const styles = {
  gridImage: {
    height: '100%',
    width:'100%',
    transform: 'none',
    position: 'relative',
    left: 0,
    top: 0
  },
  gridTile:{
    height:'auto',
    borderRadius:10,
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
      <div>
        <div className="Album-Detail-Container">
          <Stars
          name={'stars'+album.id}
          editing={false}
          starCount={5}
          value={this.getIntValueForStars(album.popularity)}
          />
          <span>
            {new Date(album.release_date).getFullYear()}
          </span>
        </div>
        <ol className="track-list">
          {
            album.tracks.items.map((track)=>
            <li key={track.id}>{track.name}</li>)
          }
        </ol>
      </div>
    )
  }
  render() {
    const {handleClick , isSelected, album} = this.props
    const {id, name, images} = album
    return (
        <GridTile 
          key={id} 
          title={name}
          onClick={handleClick.bind(this,id)} 
          style={styles.gridTile}
          className="gridTile"
          >
          <img
            src={images[1]?images[1].url:'http://www.pngmart.com/files/5/Anonymous-Transparent-Background.png'} 
            alt="Artist thumb"
            style={styles.gridImage}
          />
          {isSelected?this.renderdetails(album):null}
        </GridTile>
    )
  }
}
export default AlbumItem
