import React from 'react'
import Avatar from 'material-ui/Avatar'
import './AlbumsHeader.css'

const AlbumsHeader = ({ url , name }) =>(
  <div className="album-header">
    <Avatar
    backgroundColor='white' 
    src={url} 
    />
    <span>
        {name}
    </span>
  </div>
)

export default AlbumsHeader