import ClickableCanvas from '../src/clickable-canvas'

import {defaultMaps, defaultCanvasState} from '../src/common/constants'
import {MapView} from '../src/common/types'

const Map = props => <ClickableCanvas mapView={props.view} mapState={defaultCanvasState}/>

Map.getInitialProps = (context: any) => {
  const view: MapView = defaultMaps[context.query.mapId]
  return {view}
}

export default Map