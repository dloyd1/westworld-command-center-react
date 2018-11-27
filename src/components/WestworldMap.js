import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'



const WestworldMap = (props) => {
  const createArea = () => {
    return props.areaData.map( (areaObj) => {
      return
      <Area
        hostData = {props.hostData}
        key={areaObj.id}
        areaObj={areaObj}
      />
    })
  }

  return (
    <Segment id="map" >
       {createArea()}
    </Segment>
  )
}

export default WestworldMap
