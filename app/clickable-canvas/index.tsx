import React, { type Dispatch, useReducer } from 'react'
import { Circle, Layer, Line, Stage, Text } from 'react-konva'
import type { KonvaEventObject } from 'konva/lib/Node'
import type { Vector2d } from 'konva/lib/types'

import type {
  ClickableCanvasProps,
  ClickableCanvasState
} from '../common/types'
import { defaultCanvasState } from '../common/constants'
import MapClickReducer from './map-click-reducer'

/**
 * This factory creates a function that handles clicks on the ClickableCanvas
 * 
 * @param dispatcher a function that updates the component's state
 * @returns the click-handling function (see below)
 */
const MapClickHandlerFactory = ( dispatcher: Dispatch<Vector2d> ) =>
  /**
   * Captures a mouse click event on the Canvas component, storing the mouse
   * position data from that event in the component's state
   * 
   * @param evt the Konva mouse click event object
   * @returns a dispatcher invocation, which itself returns void but updates the
   *          component state
   */
  ( evt: KonvaEventObject<MouseEvent> ): void => {
    const clickPosition = evt.target.getStage()?.
    getPointerPosition() as Vector2d
    return dispatcher( clickPosition )
  }

/**
 * A wrapped Konva Stage overlaying a map image, on which points and a line
 * connecting them are drawn on mouse click events.
 * 
 * @param props component props, including mapView, a reference to the current
 *              map on the canvas, and the default state
 * @returns
 */
const ClickableCanvas = ( { mapView }: ClickableCanvasProps ) => {
  const { source, height, width } = mapView

  const style: React.CSSProperties = {
    backgroundImage: `url('${source}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    position: 'absolute',
  }

  const [ state, dispatch ] = useReducer(
    MapClickReducer,
    { ...defaultCanvasState, mapView } as ClickableCanvasState
  )

  const { start, end, text } = state

  const MapClickHandler = MapClickHandlerFactory( dispatch )

  return (
    <div style={style}>
      <Stage width={width} height={height} onClick={MapClickHandler}>
        <Layer>
          <Line
            points={[ start.x, start.y, end.x, end.y ]}
            visible={end.visible}
            stroke={'black'}
          />
          <Circle
            visible={start.visible}
            x={start.x}
            y={start.y}
            radius={8}
            fill={'green'}
            stroke={'black'}
          />
          <Circle
            visible={end.visible}
            x={end.x}
            y={end.y}
            radius={8}
            fill={'red'}
            stroke={'black'}
          />
          <Text
            visible={text.visible}
            x={text.x}
            y={text.y}
            fontSize={32}
            fontStyle={'bold'}
            text={text.message}
            fill={'black'}
            stroke={'white'}
            strokeWidth={1.5}
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default ClickableCanvas
