import React, { Component } from 'react';
import {GridList} from 'material-ui/GridList'
import AlbumItem from './AlbumItem'
import './AlbumList.css'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
    gridList: {
    width: 500,
    height: 'auto',
    overflowY: 'auto',
  }
}

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      selectedTile: ''
    }
  }

  handleClick(id){
    const {albumFetch} = this.props
    albumFetch(id).then(
      this.setState({selectedTile:id})
    )
  }

  render() {
    const {selectedTile} = this.state
    return (
        <div style={styles.root}>
          <GridList cellHeight={'auto'} style={styles.gridList}>
            {this.props.albumList.map(album=>
              <AlbumItem 
              key={album.id} 
              album={album}
              handleClick={this.handleClick}
              isSelected={album.id===selectedTile}
              />)}
          </GridList>
        </div>
    );
  }
}
export default AlbumList