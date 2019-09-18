import {LocationProps, MapCoords, MapView, TextProps, TransportationMode} from '../common/types'

import {defaultTransportation} from '../common/constants'

export default (start: LocationProps, end: LocationProps, view: MapView): TextProps => {
  const distance: number = calculateDistance(start, end, view.scale);

  let text: string = distance + ' miles';
  for (let mode of Object.keys(defaultTransportation)) {
    text += calculateTravel(defaultTransportation[mode], distance);
  }

  const travelText: TextProps = {
    x: end.x - (end.x > (view.width - 200) ? 426 : -24),
    y: end.y - (end.y > (view.height - 200) ? 440 : -10),
    text: text,
    visible: end.visible
  }

  return travelText;
}

const calculateDistance = (start: LocationProps, end: LocationProps, scale: number): number => {
  const delta: MapCoords = {x: end.x - start.x, y: end.y - start.y }
  const distance: number = Math.sqrt(Math.pow(delta.x, 2) + Math.pow(delta.y, 2))
  
  return Math.floor(distance * scale)
}

const calculateTravel = (mode: TransportationMode, distance: number): string => {
  const rawHours: number = distance / mode.rate
  const rawDays: number = rawHours / mode.maxLength
  const days: number = Math.floor(rawDays)
  const hours: number = Math.round((rawDays - days) * mode.maxLength)
  const hourText: string = hours + ' hour' + (hours === 1 ? '' : 's')
  const dur: string =
    days >= 1
      ? days + ' day' + (days === 1 ? '' : 's') + ', ' + hourText
      : hourText

  return '\n' + mode.desc + ': ' + dur
}