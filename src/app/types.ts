import type { GoogleMapData } from "../packages/svelte-google-map"

export enum TrailEnum {
  AT='at',
  // AZT='azt',
  PCT='pct',
}

export interface Trail {
  id: TrailEnum,
  name: string,
  data: GoogleMapData[],
  overview: {
    center: {
      lat: number,
      lng: number
    },
    zoom: number
  }
}
