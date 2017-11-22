import React, { Component } from 'react';
import {connect} from 'react-redux'
import {GridList} from 'material-ui/GridList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import ArtistItem from './ArtistItem'

const styles = {
	  root: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around',
	  },
	  gridList: {
	    width: 500,
	    height: 450,
	    overflowY: 'auto',
	  },
	}

 class ArtistList extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
			 <div style={styles.root}>
			 		<GridList cellHeight={180} style={styles.gridList}>
			 			{this.props.artists.map(artist=><ArtistItem key={artist.id} {...artist}/>)}
			 		</GridList>
       </div>
      </MuiThemeProvider>
		);
	}
}

export default connect(
	(state)=>({artists:state.artists,searchTerm:state.searchTerm})
	)(ArtistList)