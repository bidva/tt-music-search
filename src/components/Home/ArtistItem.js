import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {GridTile} from 'material-ui/GridList'
import _ from 'lodash'

const styles = {
  gridTile:{
    height:'auto',
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
          className="gridTile"
          >
          <img
            className="thumb"
            src={thumb?thumb.url:'https://cdn.pixabay.com/photo/2017/06/14/22/07/black-2403543_960_720.png'} 
            alt="Artist thumb"
          />
        </GridTile>
    )
  }
}
export default withRouter(ArtistItem)
