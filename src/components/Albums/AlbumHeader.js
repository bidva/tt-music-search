import React from 'react'

const AlbumHeader = ({ currentArtist }) => (
  <span>
    <span>
    Albums
    </span>
    <br/>
    <input type="text"
    disabled
    value={currentArtist.name}
    />
  </span>
)

export default AlbumHeader