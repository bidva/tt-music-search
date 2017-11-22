import React, { Component } from 'react';
import {connect} from 'react-redux'
import {GridList} from 'material-ui/GridList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import AlbumItem from './AlbumItem'
import {fetchAlbum} from '../reducers/artist'


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
    },
  }

 class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      selectedTile: ''
    };
  }
  handleClick(id){
    this.props.fetchAlbum(id)
    this.setState({selectedTile:id})

  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
       <div style={styles.root}>
          <GridList cellHeight={'auto'} style={styles.gridList}>
            {this.props.artistAlbums.map(album=><AlbumItem handleClick={this.handleClick} selected={this.state.selectedTile===album.id} key={album.id} {...album}/>)}
          </GridList>
       </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  (state)=>({artistAlbums:state.artistAlbums}),
  {fetchAlbum}
  )(AlbumList)