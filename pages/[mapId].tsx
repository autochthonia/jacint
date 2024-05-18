import React from 'react'
import ClickableCanvas from '../app/clickable-canvas'

import { defaultMaps, defaultCanvasState } from '../app/common/constants'
import { MapView } from '../app/common/types'

const Map = props => {
  return <ClickableCanvas mapView={props.view} mapState={defaultCanvasState} />
}

export const getStaticProps = async ( context: {
    params: { mapId: string }
} ) => {
  const view: MapView = defaultMaps[ context.params.mapId ]
  return { props: { view } }
}

export const getStaticPaths = async() => {
  const paths = Object.keys( defaultMaps ).map( mapId => ( {
    params: { mapId }
  } ) )

  return {
    paths,
    fallback: false,
  }
}

export default Map
