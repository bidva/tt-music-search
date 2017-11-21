import React, { Component } from 'react';

const AlbumItem = ({id,name})=>(
		<li >
	    <span>{name}</span>
	  </li>
	)

export default class SearchForm extends Component {
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
