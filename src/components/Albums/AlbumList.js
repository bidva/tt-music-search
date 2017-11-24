import React, { Component } from 'react';
import {GridList} from 'material-ui/GridList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import AlbumItem from './AlbumItem'

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
  componentWillMount() {
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={styles.root}>
          <GridList cellHeight={180} style={styles.gridList}>
            {this.props.albumList.map(album=>
              <AlbumItem 
              key={album.id} 
              album={album} 
              />)}
          </GridList>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default AlbumList