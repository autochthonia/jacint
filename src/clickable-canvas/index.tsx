import React, {useReducer} from 'react'
import {Circle, Layer, Line, Stage, Text} from 'react-konva'
import {ClickableCanvasProps, MapClickReducerArgs, ClickableCanvasState} from '../common/types'
import { defaultCanvasState } from '../common/constants'
import MapClickReducer from './map-click-reducer'

export default (props: ClickableCanvasProps) => {
  const {source, height, width} = props.mapView

  const style = {
    backgroundImage: `url('${source}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    position: 'absolute' as 'absolute'
  }

  const [reducerState, dispatch] = useReducer(MapClickReducer, defaultCanvasState as ClickableCanvasState)

  const {start, end, text} = reducerState;

  const MapClickHandler = (evt: any): any => {
    const stateAtClick: MapClickReducerArgs = {mapView: props.mapView, clickPosition: evt.currentTarget.pointerPos}
    return dispatch(stateAtClick)
  }

  return (
    <div style={style}>
      <Stage width={width} height={height} onClick={MapClickHandler}>
        <Layer>
          <Line
            points={[start.x, start.y, end.x, end.y]}
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
            text={text.text}
            fill={'black'}
            stroke={'white'}
            strokeWidth={1.5}
          />
        </Layer>
      </Stage>
    </div>
  )
}
