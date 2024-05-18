import { Vector2d } from 'konva/lib/types'

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
  text: string
}

export interface ClickableCanvasState {
  clicks: number
  start: LocationProps
  end: LocationProps
  text: TextProps
}

export interface ClickableCanvasProps {
  mapState: ClickableCanvasState
  mapView: MapView
}

export interface MapClickReducerArgs {
  clickPosition: Vector2d
  mapView: MapView
}
