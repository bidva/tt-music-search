import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {GridTile} from 'material-ui/GridList'

const styles = {
    gridImage: {
    height: 'auto',
    transform: 'none',
    position: 'relative',
    left: 0,
    transform: 'none',
    top: 0
  },
  gridTile:{
    boxSizing: 'border-box',
    padding: '2px',
    width: '50%',
    height: 'auto'
  }
}

class ArtistItem extends Component {
  constructor(props) {
    super(props);
    this.handelClick=this.handelClick.bind(this)
  }
  handelClick(history){
    debugger
    this.props.updateCurrentArtist(this.props.artist)
    history.push(`/artists/${this.props.artist.id}/albums`)
  }
  render() {
    const {id, name, images} = this.props.artist
    const {history} = this.props
    return (
        <GridTile 
          key={id} 
          title={name}
          onClick={()=>this.handelClick(history)}
          >
          <img style={styles.gridImage}
            src={images[1]?images[1].url:'http://www.pngmart.com/files/5/Anonymous-Transparent-Background.png'} 
            alt="Artist thumb"
          />
        </GridTile>
    )
  }
}
export default withRouter(ArtistItem)
