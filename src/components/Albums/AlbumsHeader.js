import React from 'react'
import Avatar from 'material-ui/Avatar'
import './AlbumsHeader.css'

const AlbumsHeader = ({ currentArtist }) =>console.log(currentArtist)|| (
  <div className="album-header">
    {currentArtist.images?<Avatar src={currentArtist.images[0].url} />:null}
    <span>
        {currentArtist.name}
    </span>
  </div>
)

export default AlbumsHeader