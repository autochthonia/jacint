import React, {Component} from 'react';

import Background from './creation-full.map.jpg';
import onload from '../../utils/draw';

const style = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  width: 2430,
  height: 1558
}

class CreationFull extends Component {
  componentDidMount() {
    onload();
  }

  render() {
    return(
      <div>
        <canvas id="map" style={style}></canvas>
      </div>
    )
  }
}

export default CreationFull;
