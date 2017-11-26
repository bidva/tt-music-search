import React from 'react'
import queryString from 'query-string'
import './Token.css'

const Token = (props) =>(
    <div>
      <h2>
        Please set REACT_APP_TOKEN variable in .env file by this token then restart the app:
      </h2>
      <span className="access-token">
        {queryString.parse(props.location.hash).access_token}
      </span>  
    </div> 
)

export default Token