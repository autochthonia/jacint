import React, {Component} from 'react';

const style = (path, size) => ({
  backgroundImage: `url(${path})`,
  backgroundRepeat: 'no-repeat',
  height: size.height,
  width: size.width
})

class ClickableCanvas extends Component {
  render() {
    return(
      <div>
        <canvas id="map" style={style}></canvas>
      </div>
    )
  }
}

export default ClickableCanvas;
