import React, { Component } from 'react';
import {GridList} from 'material-ui/GridList'
import AlbumItem from './AlbumItem'
import RaisedButton from 'material-ui/RaisedButton'
import './AlbumList.css'
import history from '../../lib/history'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
    gridList: {
    width: 500,
    height: 'auto',
    overflowY: 'auto',
    marginTop: 20
  }
}

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.goBack = this.goBack.bind(this)
    this.state = {
      selectedTile: ''
    }
  }

  handleClick(id){
    const {albumFetch} = this.props
    const {selectedTile} = this.state
    if (selectedTile!==id) {
     albumFetch(id).then(
      this.setState({selectedTile:id})
      ) 
    }else{
      albumFetch(id).then(
      this.setState({selectedTile:''})
      )
    }
  }
  goBack(){
    history.push("/")
  }

  render() {
    const {selectedTile} = this.state
    return (
        <div style={styles.root}>
        <RaisedButton 
          className="back-button"
          onClick={this.goBack}
          label="Go Back" 
          primary={true} />
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