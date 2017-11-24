import React, { Component } from 'react'
import {GridTile} from 'material-ui/GridList'

const styles = {
    gridImage: {
    height: 'auto',
    transform: 'none',
    position: 'relative',
    left: 0,
    top: 0
  },
  gridTile:{
    boxSizing: 'border-box',
    padding: '2px',
    width: '50%',
    height: 'auto'
  }
}

class AlbumItem extends Component {
  render() {
    debugger
    const {id, name, images} = this.props.album
    return (
        <GridTile 
          key={id} 
          title={name}
          >
          <img style={styles.gridImage}
            src={images[1]?images[1].url:'http://www.pngmart.com/files/5/Anonymous-Transparent-Background.png'} 
            alt="Artist thumb"
          />
        </GridTile>
    )
  }
}
export default AlbumItem
