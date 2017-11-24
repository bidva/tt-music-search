import React from 'react'

const AlbumsHeader = ({ currentArtist }) => (
  <span>
    <span>
    Albums
    </span>
    <br/>
    <span>
        {currentArtist.name}
    </span>
  </span>
)

export default AlbumsHeader