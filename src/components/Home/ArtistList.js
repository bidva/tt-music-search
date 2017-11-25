import React, { Component } from 'react';
import {GridList} from 'material-ui/GridList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import ArtistItem from './ArtistItem'
import './ArtistList.css'

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

class ArtistList extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div style={styles.root}>
          <GridList cellHeight={'auto'} style={styles.gridList}>
            {this.props.artists.map(artist=>
              <ArtistItem 
              key={artist.id} 
              updateCurrentArtist={this.props.updateCurrentArtist}
              artist={artist} 
              />)}
          </GridList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ArtistList