import {
  Atlas,
  ClickableCanvasState,
  LocationProps,
  TextProps,
  TravelOptions,
} from './types'

const sourcePrefix: string = process.env.NODE_ENV === 'production' ? '.' : ''

export const defaultMaps: Atlas = {
  creationFull: {
    source: sourcePrefix + '/static/Creation-Full-Map.jpg',
    height: 3740,
    width: 5780,
    scale: 2.85,
  },
  futileBloodFlows: {
    source: sourcePrefix + '/static/North-Focused-Map-v2.jpeg',
    height: 3752,
    width: 6176,
    scale: 1.43,
  },
}

export const defaultTransportation: TravelOptions = {
  horse: {
    desc: 'Horse (10hr/d)',
    rate: 4,
    maxLength: 10,
  },
  ship: {
    desc: 'Merchant Ship (tireless)',
    rate: 6,
    maxLength: 24,
  },
  cloud: {
    desc: 'Cirrus Skiff (tireless, Ess 1)',
    rate: 6,
    maxLength: 24,
  },
  agata: {
    desc: 'Agata (10hr/d)',
    rate: 30,
    maxLength: 10,
  },
  tornado: {
    desc: 'Stormwind Rider (10hr/d)',
    rate: 100,
    maxLength: 10,
  },
}

const defaultLocationProps: LocationProps = {
  x: 0,
  y: 0,
  visible: false,
}

const defaultTextProps: TextProps = { ...defaultLocationProps, message: '' }

export const defaultCanvasState: Partial<ClickableCanvasState> = {
  clicks: 0,
  start: defaultLocationProps,
  end: defaultLocationProps,
  text: defaultTextProps,
}
