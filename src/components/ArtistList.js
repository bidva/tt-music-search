import React, { Component } from 'react';
import {connect} from 'react-redux'

import {GridList, GridTile} from 'material-ui/GridList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

const ArtistItem = ({id,name,images})=>(
			<GridTile
          key={id}
          title={name}
        >
          <img src={images[3]?images[2].url:'http://www.pngmart.com/files/5/Anonymous-Transparent-Background.png'} />
        </GridTile>
	)


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
	};

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