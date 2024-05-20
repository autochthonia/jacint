import type { Vector2d } from 'konva/lib/types'

import type {
  ClickableCanvasState,
  LocationProps,
} from '../common/types'
import { defaultCanvasState } from '../common/constants'

import TravelCalculator from './travel-calculator'

/**
 * Handler function for map clicks that takes existing state from the 
 * ClickableCanvas and updates based on details from the click that led to this
 * function's invocation. Currently only handles two clicks (point A -> B).
 * 
 * @param oldState current state of the ClickableCanvas, including the
 *                 characteristics of the map being viewed, the number of prior
 *                 clicks already performed in sequence, and the cartesian
 *                 coordinates for any prior clicks held in state
 * @param clickPosition cartesian coordinates for the most recent mouse click
 * @returns 
 */
const MapClickReducer = (
  oldState: ClickableCanvasState,
  clickPosition: Vector2d
): ClickableCanvasState => {
  console.log( clickPosition )

  const { clicks, mapView, start } = oldState 
  const newState: LocationProps = { ...clickPosition, visible: true }

  switch ( clicks ) {
    case 0:
      return {
        ...oldState,
        clicks: clicks + 1,
        start: newState,
      }

    case 1:
      return {
        ...oldState,
        clicks: oldState.clicks + 1,
        end: newState,
        text: TravelCalculator( start, newState, mapView ),
      }

    default:
      return {
        ...defaultCanvasState,
        mapView,
      } as ClickableCanvasState
  }
}

export default MapClickReducer
