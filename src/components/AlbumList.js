import React, { Component } from 'react';
import {connect} from 'react-redux'

const AlbumItem = ({id,name})=>(
		<li >
	    <span>{name}</span>
	  </li>
	)

 class AlbumList extends Component {
	render() {
		return (
			 <div className="Album-List">
            <ul>
              {this.props.albums.map(album=><AlbumItem key={album.id} {...album}/>)}
            </ul>
       </div>
		);
	}
}

export default connect((state)=>({albums:state.albums}))(AlbumList)