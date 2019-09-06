export interface MapView {
  source: string,
  height: number,
  width: number,
  scaling: number
}

export type Atlas = {[ref: string]: MapView}
