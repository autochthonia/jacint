import React, {Component} from 'react';

import ClickableCanvas from '../clickable-canvas/clickable-canvas.component';
import './creation-full.component.css';

class CreationFull extends Component {
  render() {
    const {className} = this.props;
    return(
      <ClickableCanvas className={className}></ClickableCanvas>
    )
  }
}

export default CreationFull;
