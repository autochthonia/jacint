import React from 'react'
import ClickableCanvas from '../app/clickable-canvas'

import { defaultMaps, defaultCanvasState } from '../app/common/constants'
import { MapView } from '../app/common/types'

const Map = props => {
  return <ClickableCanvas mapView={props.view} mapState={defaultCanvasState} />
}

Map.getInitialProps = async context => {
  console.log( context.query )
  const view: MapView = defaultMaps[ context.query.mapId ]
  return { view }
}

export default Map
