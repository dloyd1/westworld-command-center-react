import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


const ColdStorage = (props) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>

      <HostList
        selectHost={props.selectHost}
        hostData = {props.hostData}
      />

    </Segment>
  </Segment.Group>
)

export default ColdStorage
