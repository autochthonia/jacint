import { ClickableCanvasState, LocationProps, MapClickReducerArgs } from '../common/types'
import { defaultCanvasState } from '../common/constants'

import TravelCalculator from './travel-calculator'

export default ( oldState: ClickableCanvasState, args: MapClickReducerArgs ): ClickableCanvasState => {
  const { clickPosition, mapView } = args
  console.log( args.clickPosition )

  const newState: LocationProps = { ...clickPosition, visible: true }
 
  switch ( oldState.clicks ) {
    case 0:
      return {
        ...oldState,
        clicks: oldState.clicks + 1,
        start: newState,
      }

    case 1:
      return {
        ...oldState,
        clicks: oldState.clicks + 1,
        end: newState,
        text: TravelCalculator( oldState.start, newState, mapView ),
      }

    default:
      return defaultCanvasState
  }
}
