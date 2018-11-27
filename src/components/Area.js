import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = (props) => {
  function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

  return (

    <div className='area' id={props.areaObj.name}>
      <h3 className='labels'>{toTitleCase(props.areaObj.name.replace("_"," "))}</h3>
      <HostList />
    </div>
  )
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
