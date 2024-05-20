import type { Vector2d } from 'konva/lib/types'

export interface MapView {
  source: string
  height: number
  width: number
  scale: number
}

export type Atlas = { [ref: string]: MapView }

export interface TransportationMode {
  desc: string
  rate: number
  maxLength: number
}

export type TravelOptions = { [ref: string]: TransportationMode }

export interface LocationProps extends Vector2d {
  visible: boolean
}

export interface TextProps extends LocationProps {
  message: string
}

export interface ClickableCanvasState {
  clicks: number
  mapView: MapView
  start: LocationProps
  end: LocationProps
  text: TextProps
}

export interface ClickableCanvasProps {
  mapView: MapView
}