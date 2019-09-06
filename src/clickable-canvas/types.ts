import * as T from '../utils/types';

export interface ShapeProps {
  x: number,
  y: number,
  visible: boolean
}

export interface TextProps extends ShapeProps {
  text: string
}

export interface CanvasState {
  view: T.MapView,
  start: ShapeProps,
  end: ShapeProps,
  text: TextProps
}
