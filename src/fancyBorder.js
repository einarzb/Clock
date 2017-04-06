import React, { Component } from 'react';

function ElevationBorder(props){
  return(
    <div className={'FancyBorder'}>
          {props.children} {/*we can pass things to the component's inner HTML. if I dont have it then it wont render the things inside the border in index.js */}
    </div>
  );
}


export default ElevationBorder;
