import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import * as Images from '../services/Images';
import HostInfo from './HostInfo'


const Details = (props) => {
  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  return(
    <Segment id="details" className="HQComps">
      {props.capturedHost? <HostInfo capturedHost={props.capturedHost} areaData={props.areaData}/> : renderSomething()}
    </Segment>
  )
}

export default Details
