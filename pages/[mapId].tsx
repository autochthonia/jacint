import React from 'react'

import ClickableCanvas from '../app/clickable-canvas'
import { defaultMaps } from '../app/common/constants'
import type { ClickableCanvasProps, MapView } from '../app/common/types'

/**
 * Map page with dynamic content, based upon the route path.
 * 
 * @param props contains characteristics of the map that will be visualized
 *              on the page
 * @returns React component with the page content
 */
const Map = ( props: ClickableCanvasProps ) => {
  return <ClickableCanvas mapView={props.mapView} />
}

/**
 * Static initializer for the current Map page, passing in the props for the 
 * ClickableCanvas component based on the route path at build time and pre-
 * rendering it.
 * 
 * @param context object containing information about the request to access
 *                a page mapped to on this route
 * @returns props passed in to the component at the path
 */
export const getStaticProps = async ( context: {
  params: { mapId: string }
} ): Promise<{ props: ClickableCanvasProps }> => {
  const mapView: MapView = defaultMaps[ context.params.mapId ]
  return { props: { mapView } }
}

/**
 * Static initializer for the Next router, mapping the default maps in the
 * constants file as dynamic route paths that are pre-rendered.
 * 
 * @returns object that configures the Next router for this page
 */
export const getStaticPaths = async () => {
  const paths = Object.keys( defaultMaps ).map( mapId => ( {
    params: { mapId },
  } ) )

  return {
    paths,
    fallback: false,
  }
}

export default Map
