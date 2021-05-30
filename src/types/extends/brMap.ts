export interface IBrMap {
  status: number,
  data: {
    images: {
      [index: string]: string,
    },
    pois: IBrMapPois[],
  },
}

interface IBrMapPois {
  id: string,
  name: string,
  location: {
    x: number,
    y: number,
    z: number,
  },
}