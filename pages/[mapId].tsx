import React from 'react'
import ClickableCanvas from '../app/clickable-canvas'

import { defaultMaps } from '../app/common/constants'
import type { MapView } from '../app/common/types'

const Map = ( { mapView } ) => {
  return <ClickableCanvas mapView={mapView} />
}

/**
 * Static initializer for the current Map page, setting the props for the 
 * ClickableCanvas component based on the route path. This is how Next's
 * dynamic routing is bound to Map parameters stored in the application
 * constants. 
 * 
 * @param context object containing information about the request to access
 *                a page mapped to on this route
 * @returns static props passed in when initializing the component at the path
 */
export const getStaticProps = async ( context: {
  params: { mapId: string }
} ) => {
  const mapView: MapView = defaultMaps[ context.params.mapId ]
  return { props: { mapView } }
}

export const getStaticPaths = async () => {
  const paths = Object.keys( defaultMaps ).map( ( mapId ) => ( {
    params: { mapId },
  } ) )

  return {
    paths,
    fallback: false,
  }
}

export default Map
