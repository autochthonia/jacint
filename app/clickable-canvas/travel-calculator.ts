import { Vector2d } from 'konva/lib/types'

import {
  LocationProps,
  MapView,
  TextProps,
  TransportationMode,
} from '../common/types'
import { defaultTransportation } from '../common/constants'

/**
 * Calculates the linear distance in miles on the map between the two points
 * using the pythagorean theorem.
 * 
 * @param start starting coordinate on the cartesian plane 
 * @param end end coordinate on the cartesian plane
 * @param scale the amount of pixels per mile on the map
 * @returns the amount of miles between the two points
 */
const calculateDistance = (
  start: LocationProps,
  end: LocationProps,
  scale: number
): number => {
  const delta: Vector2d = { x: end.x - start.x, y: end.y - start.y }
  const distance: number = Math.sqrt(
    Math.pow( delta.x, 2 ) + Math.pow( delta.y, 2 )
  )

  return Math.floor( distance * scale )
}

/**
 * Generates a string describing the amount of time in hours and days it takes
 * in the game world to travel between the two points using a given mode of
 * transportation.
 * 
 * @param mode mode of transportation, including a rate (mph), the maximum time
 *             per day the mode can travel, and a description (name)
 * @param distance the distance the given mode of transportation is covering
 * @returns a string describing how long the mode of transportation will take
 */
const calculateTravel = (
  mode: TransportationMode,
  distance: number
): string => {
  const rawHours: number = distance / mode.rate
  const rawDays: number = rawHours / mode.maxLength
  const days: number = Math.floor( rawDays )
  const hours: number = Math.round( ( rawDays - days ) * mode.maxLength )
  const hourText: string = hours + ' hour' + ( hours === 1 ? '' : 's' )
  const dur: string =
    days >= 1
      ? days + ' day' + ( days === 1 ? '' : 's' ) + ', ' + hourText
      : hourText

  return '\n' + mode.desc + ': ' + dur
}

/**
 * Generates a string describing the distance being traveled, in miles, and how
 * long several different modes of transportation in-game will take to cover the
 * distance in hours and days.
 * 
 * @param start starting point cartesian coordinates and whether to display it 
 * @param end ending point cartesian coordinates and whether to display it
 * @param view characteristics of the map, including its dimensions and scale
 * @returns the description string for the travel
 */
const TravelCalculator = (
  start: LocationProps,
  end: LocationProps,
  view: MapView
): TextProps => {
  const distance: number = calculateDistance( start, end, view.scale )

  let message: string = distance + ' miles'
  for ( const mode in defaultTransportation ) {
    message += calculateTravel( defaultTransportation[ mode ], distance )
  }

  const travelText: TextProps = {
    x: end.x - ( end.x > view.width - 200 ? 426 : -24 ),
    y: end.y - ( end.y > view.height - 200 ? 440 : -10 ),
    message,
    visible: end.visible,
  }

  return travelText
}

export default TravelCalculator
