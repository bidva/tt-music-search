import React, { Component } from 'react';
import {connect} from 'react-redux'

const ArtistItem = ({id,name})=>(
		<li >
	    <span>{name}</span>
	  </li>
	)

 class ArtistList extends Component {
	render() {
		return (
			 <div className="Album-List">
            <ul>
              {this.props.artists.map(artist=><ArtistItem key={artist.id} {...artist}/>)}
            </ul>
       </div>
		);
	}
}

export default connect((state)=>({artists:state.artists}))(ArtistList)