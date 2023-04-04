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

export enum SectionStatus {
  NotStarted='Not Started',
  Planned='Planned',
  InProgress='In Progress',
  Complete='Complete'
}

export interface Section {
  id: string,
  trailId: TrailEnum,
  name?: string,
  start?: any,
  end?: any,
  elevationDelta?: number,
  distanceDelta?: number,
  status: SectionStatus,
}
