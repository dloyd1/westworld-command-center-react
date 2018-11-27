import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  const createHost = () => {
    return props.hostData.map(hostObj => {
      return <Host
        selectHost={props.selectHost}
        key={hostObj.id}
        hostObj={hostObj}
      />
    })
  }

  return(
    <Card.Group itemsPerRow={6}>
      {createHost()}
    </Card.Group>
  )
}

export default HostList
