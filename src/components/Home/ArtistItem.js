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
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.6) 90%,rgba(0,0,0,0.1) 100%)"
          className="gridTile"
          >
          <img
            className="thumb"
            src={thumb?thumb.url:'https://icon-icons.com/icons2/931/PNG/512/executive_person_icon-icons.com_72414.png'} 
            alt="Artist thumb"
          />
        </GridTile>
    )
  }
}
export default withRouter(ArtistItem)
