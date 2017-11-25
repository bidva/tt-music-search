import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {GridTile} from 'material-ui/GridList'
import _ from 'lodash'

const styles = {
  gridTile:{
    height:'auto',
    borderRadius:10,
    border:'solid 2px black'
  }
}

class ArtistItem extends Component {
  constructor(props) {
    super(props);
    this.handelClick=this.handelClick.bind(this)
  }
  handelClick(history){
    history.push(`/artists/${this.props.artist.id}/albums`)
  }
  render() {
    const {id, name, images} = this.props.artist
    const {history} = this.props
    const thumb = _.find(images,{'width':640})
    return (
        <GridTile 
          key={id} 
          title={name}
          onClick={()=>this.handelClick(history)}
          style={styles.gridTile}
          >
          <img
            className="thumb"
            src={thumb?thumb.url:'http://www.pngmart.com/files/5/Anonymous-Transparent-Background.png'} 
            alt="Artist thumb"
          />
        </GridTile>
    )
  }
}
export default withRouter(ArtistItem)
