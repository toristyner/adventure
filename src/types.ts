export enum TrailEnum {
  AT='at',
  AZT='azt',
  PCT='pct',
}

export interface Trail {
  id: TrailEnum,
  name: string,
  geoJson: string,
  overview: {
    center: {
      lat: number,
      lng: number
    },
    zoom: number
  }
}
  